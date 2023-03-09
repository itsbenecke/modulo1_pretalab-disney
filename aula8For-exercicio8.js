/* Dado um numero qualquer, crie um código em Javascript que diga se ele é primo ou não.*/

let num = 8741
let confere = 0
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        confere = confere + 1
    } else {
        confere = confere + 0
    }
}
if (confere === 0) {
    console.log(`O número ${num} é primo`)
} else {
    console.log(`O número ${num} não é primo`)
}