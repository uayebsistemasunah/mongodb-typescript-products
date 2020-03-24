import mongoose = require("mongoose");
import {IProveedor, getProveedor} from "./Proveedores"
import {connectMongoDB} from "./helpers"

interface IProducts extends mongoose.Document { 
    name: string;
    precio_venta: number;
    precio_compra: number;
    cantidad: number;
    proveedor: IProveedor
}

const ProductoSchema = new mongoose.Schema({
    name: { type: String, required: true},
    precio_venta: {type: Number, required: true},
    precio_compra: {type: Number, required: true},
    cantidad: {type: Number, required: true},
    proveedor: { type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" }
});


export const Producto = mongoose.model<IProducts>("Producto", ProductoSchema);

export const CreateProduct = async function(proveedor:any,name:string, precio_compra:number,precio_venta:number,cantidad:number){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el proveedor en funcion del nombre
    const prov:any = await getProveedor(proveedor);

    //persistencia de nuestro producto
    const p = new Producto();
    p.name = name;
    p.precio_compra = precio_compra;
    p.precio_venta = precio_venta;
    p.cantidad =  cantidad;
    p.proveedor = prov;

    p.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(p);
        }
    });
}

export const deleteProduct = async function(filter:any){
    await connectMongoDB;
    Producto.deleteMany(filter,(err:any, result:any)=>{
        if(err){
            console.log(err);            
        }else{
            console.log(result.n);
        }
    })
}

export const UpdateProduct = async function(filter:any,update:any){
    await connectMongoDB;
    Producto.updateMany(filter,update,(err:any,result:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    });
}


