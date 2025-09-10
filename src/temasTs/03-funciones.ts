function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(23, 45));

const sumarFlecha = (a: number, b: number): number => a + b;
console.log(sumarFlecha(34, 56));

function multiplicar(n1: number, n2: number = 1, base: number = 2): number {
    return n1 * n2 * base;
}

console.log(multiplicar(5, 10));        // 5*10*2 = 100
console.log(multiplicar(5, 1, 10));     // 5*1*10 = 50
console.log(multiplicar(5, 20, 10));    // 5*20*10 = 1000

interface Mascota {
    nombre: string;
    edad: number;
    tipo: string;
    mostrarEdad: () => string;
}

function crearMascota(mascota: Mascota, x: number): void {
    mascota.edad += x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}

const mascota1: Mascota = {
    nombre: "Luna",
    edad: 3,
    tipo: 'perro',
    mostrarEdad() {
        return `La edad de ${this.nombre} es ${this.edad} años`;
    }
};

crearMascota(mascota1, 2);
