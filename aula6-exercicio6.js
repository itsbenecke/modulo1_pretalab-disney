/*6. Crie uma variável chamada diaDaSemana que receba a string "quarta-feira". 
Utilizando if/else, implemente condicionais para que:

Conteúdos abordados: Tabela verdade, Estrutura Condicional

a. Se nossa variável for: "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", 
o console.log imprima a seguinte mensagem:

Oba, mais um dia de aprendizado em JavaScript :D

b. Se for algum dia de fim de semana:

“FINALMENTE, descanso merecido”.

PLANTÃO DE DUVIDA: pq tem que === e repeticao do diadasemana ?
*/

let diaDaSemana = "quarta-feira";

if (diaDaSemana === "segunda-feira" ||
    diaDaSemana === "terça-feira" ||
    diaDaSemana === "quarta-feira" ||
    diaDaSemana === "quinta-feira" ||
    diaDaSemana === "sexta-feira") {
    console.log(`Oba, mais um dia de aprendizado em JavaScript :D`);
} else {
    console.log(`FINALMENTE, descanço merecido.`);

}