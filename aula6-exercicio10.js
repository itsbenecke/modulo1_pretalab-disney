/*10. Defina 3 constantes que salvem valores numericos diferentes. 
Utilize if/else para escrever um código que retorne o maior de três números.*/

let valor1 = 2
let valor2 = 10
let valor3 = 6

if (valor1 > valor2 && valor1 > valor3) {
    console.log(valor1 + " é o maior valor!");
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log(valor2 + " é o maior valor!");
} else {
    console.log(valor3 + " é o maior valor!");
}