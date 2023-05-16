import express from "express";
import "dotenv/config.js"
import './config/database.js';

const server = express();
const PORT =  process.env.PORT || 8080; // puerto del servidor
const ready = () => console.log('SERVER READY IN PORT: ' + PORT);

//middleware
server.use(express.json()); //Permite entradas y tambien trabajar con formato json
server.use(express.urlencoded({ extended: false })) //Permite capturar consultas completas

//Router + Server
server.listen(PORT, ready);

