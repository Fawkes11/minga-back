import express from "express";
import "dotenv/config.js";
import './config/database.js';
import indexRouter from "./router/index.js";
import cors from 'cors';
import morgan from 'morgan';

const server = express();
const PORT =  process.env.PORT || 8080; // puerto del servidor
const ready = () => console.log('SERVER READY IN PORT: ' + PORT);

//middleware
server.use(express.json()); //Permite entradas y tambien trabajar con formato json
server.use(express.urlencoded({ extended: false })); //Permite capturar consultas completas
server.use(cors());
server.use(morgan('dev'));

//router
server.use('/api', indexRouter);


//Router + Server
server.listen(PORT, ready);
