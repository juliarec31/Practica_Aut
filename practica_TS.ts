let a: number = 12;
let b: number = 3;

function multiplicar(primer: number, segundo: number): void{
    console.log("El resultado de la multiplicación es:" + primer * segundo);

}

multiplicar(a, b);

function sumar(primer: number, segundo: number): void{
    console.log("El resultado de la suma es:" + (primer + segundo));

}

sumar(a, b);

function dividir(primer: number, segundo: number): void{
    console.log("El resultado de la división es:" + (primer / segundo));

}

dividir(a, b);

function division(primer: number, segundo: number): void {
    if (primer === 0) {
        console.log("Error: No se puede dividir por cero");
    } else {
        console.log("El resultado de la división es: " + (primer / segundo));
    }
}
 
division(a, b);



  
