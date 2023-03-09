/*
3. Vamos fazer algumas operações simples. 
Queremos imprimir a área e o perímetro de um retângulo, sabemos que a base do retângulo é 5 e a altura é 8.
Conteúdos abordados: operadores aritméticos

Para te ajudar a pensar, escreva em português um algoritmo do que você deve fazer para calcular a área de um perimentro. 
Feito isso, escreva um código que calcule a área e exiba no console. 
perimetro = 2(b+h) e area = base * altura */

const base = 5;
const altura = 8;

const area = base * altura;
const perimetro = 2 * (base + altura);

console.log(
    `A area do retângulo de base ${base} e altura ${altura} corresponde a ${area} e perimetro corresponde a ${perimetro}`
);