import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import  mongoose from 'mongoose';

dotenv.config()
const app = express();

mongoose.connect('mongodb://localhost:27017/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to MongoDB > api");
});

// configuracion de middleware requeridos para la lectura de peticiones
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//importamos la rutas registras de la aplicación

import routes  from "./api/routes/routes";
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT} ✅`);
});

app.get('/:name',(req,res)=>{
    res.send('Hello world ${req.params.name}')
});

/*
const express = require('express')
const app = express()
const port =3000

/**
 * 
 * # Instalamos las dependencias de typescript para el body parser, express y node
npm install --save-dev @types/body-parser @types/express ts-node nodemon typescript
# Inicializamos la configuración de typescript en el proyecto
npx tsc -init
 /
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/prestamos',(req,res)=>{
    res.send('Hello world')
})



app.get('/prestamos',(req,res)=>{
    const nSolicitud = req.params.nsolicitud;
    res.send('datos de solicitus ${nsolicitud}')
}) */
