import express from "express";

const server = express();

const PORT =  8080
const ready = () => console.log('SERVER READY IN PORT: ' + PORT);

server.listen(PORT, ready);