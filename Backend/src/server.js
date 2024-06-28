import express from 'express';
import routes from './routes/web';
import socketIoController from './controllers/socketIoController';
import cors from 'cors';
import multer from "multer";
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(upload.any());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());




routes.initWebRouter(app);

socketIoController.sendMessageAdmin(io);


server.listen(port, () => {
    console.log("Connected success port: " + port);
});

