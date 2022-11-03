import { validationResult } from "express-validator";
import Color from "../models/color";




export const listarColores = async(req,res)=>{
    try {
        const color =await Color.find()
        res.status(200).json(color)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"error al intentar cargar la lista de colores"
        })
    }
}


export const obtenerColores = async(req,res)=>{
    try {
        const buscarColor = await Color.findById(req.params.id)
        res.status(200).json(buscarColor)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"no se pudo obtener el color"
        })
    }
}


export const editarColor =async (req,res)=>{
      try {
           const errors = validationResult(req)
           if(!errors.isEmpty()){
             return res.status(400).json({
                errores: errors.array()
             })
           }


         await Color.findByIdAndUpdate(req.params.id,req.body)
         res.status(200).json({
            mensaje:"el color se edito correctamente"
         })
      } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"error al intentar editar el color"
        })
      }
}


export const borrarColor = async(req,res)=>{
    try {
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:"color eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"error al borrar el color"
        })
    }
}



export const crearColor = async (req,res)=>{
   try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores:errors.array()
            })
        }
       const colorNuevo = new Color(req.body)
       await colorNuevo.save()
       res.status(201).json({
        mensaje:"el color se creo correctamente"
       })
       
    
   } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje:"error al intentar crear el color"
    })

   }

}