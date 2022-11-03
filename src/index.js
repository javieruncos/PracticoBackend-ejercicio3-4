import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path"
import "./database"
import ColoresRouter from "./routes/colores.routes"


const app = express();

app.set("port",process.env.PORT || 5000);
app.listen(app.get("port"),()=>{
    console.log("estas en el puerto " + app.get("port"))
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"../public")))


app.use("/apicolores",ColoresRouter)