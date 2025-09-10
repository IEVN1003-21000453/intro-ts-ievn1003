interface Reproductor{
volumen:number,
segundo:number,
cancion:string,
detalles:Detalles
}

interface Detalles{
    autor:string,
    anion:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Mes',
    detalles:{
        autor: 'Ed Sheeran',
        anion:2015
    }
}

console.log('El volumen  actual es de:', reproductor.volumen);
console.log('El segundo actual es de:',reproductor.segundo);
console.log('La caciòn actual es de:',reproductor.cancion);
console.log('El autor es:',reproductor.detalles.autor);
console.log('el año es: ',reproductor.detalles.anion);

//Destructuracion de objetos

const {volumen,segundo,cancion,detalles}=reproductor
const {autor,anion}=detalles
console.log('El volumen actual es de:',volumen);
console.log('El segundo actual es de:',segundo);
console.log('La cancion actual es de:',cancion);
console.log('El autor es:',autor);
console.log('El año es:',anion)

const dbz:string[]=['Goku', 'Vegeta', 'Trunsk']

console.log('Personaje 1:',dbz[0]);
console.log('Personaje 2:',dbz[1]);
console.log('Personaje 1:',dbz[2]);

const [p1,p2,p3]=dbz
console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3); 