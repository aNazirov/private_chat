import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import passport from 'passport'
import { AuthRouter, UserRouter, ChatRouter } from './routes';
import passportStatic from './middleware/passport';
import http from 'http'
import { Server } from 'socket.io'
import { clientErrorHandler, errorHandler, errorNotFound, logErrors } from './utils';
import { identification } from "./middleware/io";

const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.use(identification)
app.use(passport.initialize())
passportStatic(passport)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', AuthRouter.default);
app.use('/users', UserRouter.default);
app.use('/chats', ChatRouter.default);

app.use(errorNotFound);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

export default server;