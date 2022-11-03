import mongoose from "mongoose";

const url = "mongodb://localhost:27017/ejercicio3"

mongoose.connect(url);

const conexion = mongoose.connection;

conexion.once("open",()=>{
    console.log("DB conectada")
})