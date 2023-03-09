/*7-Imprima os números de 0 até 40 na tela e em seguida, quantos números pares e quantos números ímpares foram impressos.*/
/*
let j = 0;
let P = 0;
let I = 0;

for (let i = 0; i <= 40; i++) {
    console.log(i);

    if (j % 2 === 0) {
        j = P;
        P = P + 1;
    } else {
        j = I;
        I = I + 1;
    }
}
console.log(`Entre 0 e 40, há ${P} números pares e ${I} números ímpares.`); */


let pares = 0;
let impares = 0;

for (let num = 0; num <= 40; num++) {
    console.log(num);
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Foram impressos ${pares} números pares e ${impares} números ímpares.`)