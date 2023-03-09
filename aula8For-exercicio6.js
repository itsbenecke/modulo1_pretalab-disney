/*3. Mostre na tela os números primos que estão entre o número 0 e o 400. */



for (let i = 2; i <= 400; i++) { //inicia no 2 pois não tem num primo 0 e 1 
    let ePrimo = true;
    for (let j = 2; j < i; j++) { // esse segundo for define a estrutura de numero primo, descompassando a variavel 
        if (i % j === 0) { // 3 % 2 !=0 (true)
            ePrimo = false;
        }
    }
    if (ePrimo === true) {
        console.log(i);
    }
}