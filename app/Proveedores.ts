import mongoose = require("mongoose");
import {connectMongoDB} from "./helpers"

interface IProveedor extends mongoose.Document { 
    name: string;
    direccion: string;
    tipo: string;
}

const ProveedorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tipo: {type: String, required: true},
    direccion: { type: String, required: false }
});

export const Proveedor = mongoose.model<IProveedor>("Proveedor", ProveedorSchema);

export const CreateProveedor = async function(name: string, direccion: string, tipo: string){
    await connectMongoDB;

    const newOne = new Proveedor();
    newOne.name = name;
    newOne.direccion = direccion;
    newOne.tipo = tipo;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}

