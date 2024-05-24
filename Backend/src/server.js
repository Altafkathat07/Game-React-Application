import express from 'express';
import routes from './routes/web';
import socketIoController from './controllers/socketIoController';
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

require('dotenv').config();
let cookieParser = require('cookie-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8888;

app.use(upload.any());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


routes.initWebRouter(app);

socketIoController.sendMessageAdmin(io);


server.listen(port, () => {
    console.log("Connected success port: " + port);
});

