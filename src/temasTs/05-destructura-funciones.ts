interface Producto {
    nombre: string;
    precio: number;
}

const telefono: Producto = {
    nombre: 'Iphone 14',
    precio: 1500
}

const tablet: Producto = {
    nombre: 'iPad Pro',
    precio: 1200
}

function calcularISV(productos: Producto[]): number {
    let total = 0;
    for (let producto of productos) {
        total += producto.precio;
    }
    return total * 0.15;
}

const articulos: Producto[] = [telefono, tablet];
const isv = calcularISV(articulos);
console.log('ISV:', isv);


//Desestructuracion en funciones 
function calcularISV2(productos: Producto[]): [number, number] {
    let total = 0;
    for (let producto of productos) {
        total += producto.precio;
    }
    return [total, total * 0.15];
}

const [total, impuesto] = calcularISV2(articulos);
console.log('Total:', total, 'ISV:', impuesto);
