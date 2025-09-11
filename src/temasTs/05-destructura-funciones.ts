export interface Producto {
    nombre:string,
    precio:number,
}
 
const telefono:Producto= {
    nombre: 'Iphone 16',
    precio: 1500
}
 
const tablet:Producto= {
    nombre: 'Ipad ',
    precio: 1200
}
 
function calcularISV(productos:Producto[]):number {
    let total=0;
    for(let producto of productos) {
        total+=producto.precio
    }
    return total*0.15
}
 
const articulos=[telefono, tablet]
const isv=calcularISV(articulos)
console.log('ISV: ', isv)
 
export function calcularISV2(productos:Producto[]):[number, number] {
    let total=0;
    for(let producto of productos) {
        total+=producto.precio
    }
    return [total,total*0.15]
}
const isv2=calcularISV2(articulos)
console.log('ISV: ', isv2)