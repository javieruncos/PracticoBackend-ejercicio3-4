import { Router } from "express";
import {
  borrarColor,
  crearColor,
  editarColor,
  listarColores,
  obtenerColores,
} from "../controllers/color.controllers";
import { check } from "express-validator";

const router = Router();

router.route("/colores")
.get(listarColores)
.post([check("color")
.notEmpty()
.withMessage("el nombre del color es obligatorio")
.isLength({min:3})
.withMessage("la cantidad de caracteres minimo es de 3")


]
,crearColor);
router
  .route("/colores/:id")
  .get(obtenerColores)
  .put([check("color")
  .notEmpty()
  .withMessage("el nombre del color es obligatorio")
  .isLength({min:3})
  .withMessage("la cantidad minima de caracteres es de 3")
],editarColor)
  .delete(borrarColor);

export default router;
