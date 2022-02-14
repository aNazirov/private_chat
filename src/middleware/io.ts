export const identification = (socket: any, next: any) => {
    const token = socket.handshake?.auth?.token;
    if (!token) {
        return next(new Error("invalid User"));
    }
    socket.username = 'test';
    next();
}