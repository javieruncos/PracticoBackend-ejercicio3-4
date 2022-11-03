import mongoose ,{Schema} from "mongoose";


const colorNuevo = new Schema({
    color:{
        type:String,
        required:true
    }
})


const Color = mongoose.model("color",colorNuevo)

export default Color