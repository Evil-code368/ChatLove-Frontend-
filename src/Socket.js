import { io } from "socket.io-client";
export const socket = io(import.meta.env.API_URL, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
});
