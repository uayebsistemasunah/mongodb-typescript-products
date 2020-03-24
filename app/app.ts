import {CreateProveedor, DeleteProveedor} from "./Proveedores"
import {CreateProduct, deleteProduct, UpdateProduct} from "./products"

//CreateProveedor("P1","Colonia","Direccion de colonia numero uno","1");
//CreateProveedor("P2","Pronto","Direccion de un pronto","2");
//CreateProveedor("P3","Walmart","Direccion de un Walmart","1");

//DeleteProveedor({tipo:1});


const productNames: string[] = ["POO","UNAH","Goku","super","Delicioso","Cosita","Tamales","Tomates","Pastas","Detergentes","Chocolates","Alegria","Coronavirus","Mesa","Me desamayo"];

/*for(let i=1; i<=100; i++){
    let precioCosto:number = Math.floor(Math.random() * 1000) + 30;
    let precioVenta:number = Math.floor(Math.random() * 1100) + 35;
    let cantidad:number = Math.floor(Math.random() * 100) + 1;
    let name:string = "Producto "+productNames[Math.floor( Math.random() * productNames.length)]+" de "+productNames[Math.floor( Math.random() * productNames.length)];
    let n:number = Math.floor(Math.random() * 3) + 1;
    let prov:string = "P"+n    
    CreateProduct({_id:prov},name,precioCosto,precioVenta,cantidad);
}*/

UpdateProduct({precio_venta:{$gt:500}},{$set:{ precio_compra:0 }});



//deleteProduct({ precio_compra: { $gt: 0 } } );
