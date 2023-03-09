/* 
7. Você está num restaurante e quer comer alguma coisa no almoço. Então, você diz:
Conteúdos abordados: operadores relacionais e estrutura condicional
Por favor, me veja uma feijoada E um suco de laranja”
Seria muito triste se você recebesse apenas a bebida ou só a comida, não é?
Também não seria legal se recebêssemos a feijoada completa, mas a nossa bebida fosse um caldo de cana. Porque nosso pedido era de que as duas condições fossem atendidas corretamente.
Crie duas variáveis em JS, uma deve conter o prato e a outra a bebida. 
Quando o pedido vier certo, seu programa deve imprima a mensagem: "Muito grata pelo almoço!" caso não seja o pedido, imprima: "Acho que houve um engano com meu pedido".
*/

//PLANTAO DE DUVIDA: na resolução é usado true/false , eu usando === é "errado"?

let comida = "batata frita";
let bebida = "Coca-cola";

if (comida === "Feijoada" && bebida === "Coca-cola") {
    console.log("Muito grata pelo almoço!");
} else {
    console.log("Acho que houve um engano com meu pedido");
}