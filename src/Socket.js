import { io } from "socket.io-client";



let socket = null;
export const getSocket = () => {
  if (!socket) {
    socket =
    io(import.meta.env.API_URL,{
      autoConnect: false,
      reconnection: true,
      reconnectionDelay:1000,
      reconnectionDelayMax:5000,
      reconnectionAttempts:5,
    });
  }
  return socket;
};
