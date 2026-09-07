import { useEffect, useState } from "react";
import { socket } from "../Socket";

const getPlayerKey = () => {
	const existing = sessionStorage.getItem("ludoPlayerKey");
	if (existing) return existing;
	const key = `${crypto.randomUUID()}-${Date.now()}`;
	sessionStorage.setItem("ludoPlayerKey", key);
	return key;
};

const trackPosition = (player, progress) => {
	if (progress < 0 || progress >= 52) return null;
	return (player.color === "red" ? progress : progress + 26) % 52;
};

const safeSquares = new Set([0, 8, 13, 21, 26, 34, 39, 47]);

const Games = ({ connected }) => {
	const [game, setGame] = useState(null);
	const [invite, setInvite] = useState(null);
	const [notice, setNotice] = useState("");
	const [rolling, setRolling] = useState(false);
	const [playerKey] = useState(getPlayerKey);

	const me = game?.players.find((player) => player.key === playerKey);
	const opponent = game?.players.find((player) => player.key !== playerKey);
	const myTurn = game?.turn === playerKey;
	const canMove = (progress) => myTurn && game?.dice !== null && progress !== 58 && (progress === -1 ? game.dice === 6 : progress + game.dice <= 58);

	useEffect(() => {
		const onInvite = ({ name }) => setInvite(name || "Your stranger");
		const onState = (nextGame) => {
			setGame(nextGame);
			setInvite(null);
			setRolling(false);
		};
		const onDeclined = () => setNotice("Your stranger declined the game invite.");
		const onError = ({ message }) => {
			setNotice(message);
			setRolling(false);
		};
		const onEnded = ({ reason }) => {
			setGame(null);
			setNotice(reason || "The game ended.");
		};
		socket.on("ludo:invite", onInvite);
		socket.on("ludo:state", onState);
		socket.on("ludo:declined", onDeclined);
		socket.on("ludo:error", onError);
		socket.on("ludo:ended", onEnded);
		socket.emit("ludo:resume", { playerKey, name: sessionStorage.getItem("userName") || "Stranger" });
		return () => {
			socket.off("ludo:invite", onInvite);
			socket.off("ludo:state", onState);
			socket.off("ludo:declined", onDeclined);
			socket.off("ludo:error", onError);
			socket.off("ludo:ended", onEnded);
		};
	}, [playerKey]);

	const invitePartner = () => {
		setNotice("");
		socket.emit("ludo:invite");
		setNotice("Waiting for your stranger to accept...");
	};

	const roll = () => {
		if (!myTurn || game.dice !== null || rolling) return;
		setRolling(true);
		socket.emit("ludo:roll", { playerKey });
	};

	const move = (tokenIndex) => {
		if (canMove(me.tokens[tokenIndex])) socket.emit("ludo:move", { playerKey, tokenIndex });
	};

	const closeGame = () => {
		socket.emit("ludo:leave", { playerKey });
		setGame(null);
	};

	return (
		<>
			{!game && connected && (
				<button onClick={invitePartner} className="rounded-xl bg-amber-400 px-4 py-2 font-bold text-slate-950 shadow-lg transition hover:bg-amber-300">
					Play Ludo
				</button>
			)}

			{notice && !game && <span className="hidden text-xs text-amber-300 sm:inline">{notice}</span>}

			{invite && !game && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-5">
					<div className="w-full max-w-sm rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
						<p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Game invite</p>
						<h2 className="mt-2 text-2xl font-black">{invite} wants to play Ludo</h2>
						<div className="mt-6 flex gap-3">
							<button onClick={() => { socket.emit("ludo:respond", { accepted: false }); setInvite(null); }} className="flex-1 rounded-xl border border-slate-200 px-4 py-3 font-semibold">Decline</button>
							<button onClick={() => socket.emit("ludo:respond", { accepted: true })} className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white">Accept</button>
						</div>
					</div>
				</div>
			)}

			{game && (
				<div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 p-4 text-white sm:p-8">
					<div className="mx-auto max-w-4xl">
						<div className="mb-4 flex items-center justify-between">
							<div><p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">ChatLove Ludo</p><h2 className="text-2xl font-black sm:text-3xl">Two players. One board.</h2></div>
							<button onClick={closeGame} className="rounded-xl border border-white/20 px-3 py-2 text-sm text-slate-300 hover:bg-white/10">Exit</button>
						</div>
						<div className="mb-4 grid grid-cols-2 gap-3">
							{[me, opponent].map((player) => <div key={player.key} className={`rounded-2xl border p-3 ${game.turn === player.key ? "border-amber-300 bg-amber-300/10" : "border-white/10 bg-white/5"}`}><div className="flex items-center justify-between"><span className={`font-bold capitalize ${player.color === "red" ? "text-rose-300" : "text-emerald-300"}`}>{player.color}</span><span className="text-xs text-slate-400">{player.connected ? "Online" : "Reconnecting..."}</span></div><p className="mt-1 text-sm text-slate-300">{player.name} · {player.tokens.filter((token) => token === 58).length}/4 home</p></div>)}
						</div>
						  <div className="rounded-3xl bg-linear-to-br from-rose-950 via-slate-900 to-emerald-950 p-3 shadow-2xl sm:p-6">
						  <div className="grid grid-cols-8 gap-1 rounded-2xl bg-slate-950/60 p-2 sm:grid-cols-13">
								{Array.from({ length: 52 }, (_, position) => {
									const tokens = game.players.flatMap((player) => player.tokens.map((progress, tokenIndex) => ({ player, progress, tokenIndex }))).filter(({ player, progress }) => trackPosition(player, progress) === position);
									return <div key={position} className={`relative aspect-square rounded-md border ${safeSquares.has(position) ? "border-amber-300/70 bg-amber-200/20" : "border-white/10 bg-white/10"}`}><span className="absolute left-1 top-0.5 text-[8px] text-white/30">{position + 1}</span>{tokens.map(({ player, tokenIndex }) => <span key={`${player.key}-${tokenIndex}`} className={`absolute inset-1 rounded-full border-2 border-white shadow-lg transition-all duration-500 ${player.color === "red" ? "bg-rose-500" : "bg-emerald-500"}`} />)}</div>;
								})}
							</div>
							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								{[me, opponent].map((player) => <div key={player.key} className="rounded-2xl bg-black/20 p-3"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">{player.color} base</p><div className="grid grid-cols-4 gap-2">{player.tokens.map((progress, tokenIndex) => <button key={tokenIndex} disabled={player.key !== playerKey || !canMove(progress)} onClick={() => move(tokenIndex)} className={`aspect-square rounded-full border-2 text-xs font-black transition ${player.color === "red" ? "border-rose-300 bg-rose-500" : "border-emerald-300 bg-emerald-500"} ${player.key === playerKey && canMove(progress) ? "scale-110 ring-2 ring-amber-300 hover:scale-125" : "opacity-80"}`}>{progress === 58 ? "HOME" : progress === -1 ? "" : progress}</button>)}</div></div>)}
							</div>
						</div>
						<div className="mt-4 flex flex-col items-center gap-3 text-center"><p className="text-lg font-bold">{game.status === "finished" ? `${game.winner === playerKey ? "You win" : "Your stranger wins"}!` : myTurn ? "Your turn" : `${opponent.name}'s turn`}</p><button onClick={roll} disabled={!myTurn || game.dice !== null || rolling || game.status !== "playing"} className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl font-black text-slate-900 shadow-xl ${rolling ? "animate-spin" : ""} disabled:cursor-not-allowed disabled:opacity-40`}>{game.dice || "🎲"}</button><p className="text-xs text-slate-400">{game.dice ? "Choose a highlighted token" : "Roll the dice"}</p></div>
					</div>
				</div>
			)}
		</>
	);
};

export default Games;
