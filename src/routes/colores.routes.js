import { Router } from "express";
import { crearColor, listarColores, obtenerColores } from "../controllers/color.controllers";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor)
router.route("/colores/:id").get(obtenerColores)



export default router;