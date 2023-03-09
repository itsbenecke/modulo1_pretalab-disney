/*
4. Sem rodar os códigos, tente analisar e identificar quais trechos de código terá como saída no console 'Folia' 
com base nas variáveis declaradas.*/

const a = null;
const b = 20;
const c = true;
const d = '';

//TRECHO 1
if (b === 20 && c != false && d == 0) {
    console.log('Folia')
} else {
    console.log('Descanso')
}


//TRECHO 2
if (a == 0) {
    console.log('Folia')
} else {
    console.log('Descanso')
}

//TRECHO 3 
if (d) {
    console.log('Folia')
} else {
    console.log('Descanso')
}

//TRECHO 4
if (b == '20') {
    console.log('Folia')
} else {
    console.log('Descanso')
}