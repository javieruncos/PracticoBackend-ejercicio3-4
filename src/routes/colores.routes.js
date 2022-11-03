import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores, obtenerColores } from "../controllers/color.controllers";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor)
router.route("/colores/:id").get(obtenerColores).put(editarColor).delete(borrarColor)



export default router;