//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce

const valores = [ 1,2,3,4,5];

const operadorDeSoma = (valorAnterior, valorAtual) => valorAnterior + valorAtual;

const somaDosvalores = valores.reduce(operadorDeSoma);

//OU
let sum = 0;
for(let i = 0; i <valores.length; i++) {
    sum = sum + valores[i];
}

console.log('O somatório dos valores', valores, 'é:', somaDosvalores, sum);

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter

const calculoDeValoresPares = item => item % 2 === 0;
const valoresPares = valores.filter(calculoDeValoresPares);

const filtrarValoresPares = valores.filter(calculoDeValoresPares).reduce(operadorDeSoma);

console.log('Os valores pares do array', valores, 'são:', valoresPares,'e a soma é:', filtrarValoresPares);

// 3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

const calculoDeValoresImpares = item => item % 2 !== 0;
const valoresImpares = valores.filter(calculoDeValoresImpares)

const filtrarValoresImpares = valores.filter(calculoDeValoresImpares).reduce(operadorDeSoma);

console.log('Os valores impares do array', valores, 'são:', valoresImpares, 'e a soma é:', filtrarValoresImpares);

// 4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dia: utilize reduce)

const conjuntoDeValores = [ 1, 5, 1, 10, 3, 1, 4];

//Compor um objeto
const quantidadeDeRepeticao = conjuntoDeValores.reduce((objeto, item) => {
    if(!objeto[item]) {
        objeto[item] = 1;
    } else {
        objeto[item]++;
    }
    return objeto;
}, {});

console.log(quantidadeDeRepeticao);

// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) 
//(Dica: utilize reduce, filter e keys) (dica: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercicio

let valoresUnicos1 = conjuntoDeValores.reduce((objeto,item) => (objeto[item] = '', objeto), {})
console.log('Primeira forma', valoresUnicos1)

let valoresUnicos2 = (value, index, self) => {
    return self.indexOf(value) === index;
}

valoresUnicos2 = conjuntoDeValores.filter(valoresUnicos2);
console.log(`Segunda forma: ${valoresUnicos2}`);

// 6) Dado um vetor com números, retorne somente os números pares;

const filtrarPares = valores.filter(calculoDeValoresPares);
console.log(filtrarPares);

// 7) Dado um vetor com números, retorne somente os números ímpares;

const filtrarImpares = valores.filter(calculoDeValoresImpares);
console.log(filtrarImpares)

// 8) Uma função é chamada da seguinte forma:
// calculadora(10, '+', 20)
//crie o corpo da função de forma que ela realize as 4 operações aritméticas

const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multriplicacao = (x, y) => x * y;
const divisao = (x, y) => x / y;

const calcular= (soma) => {
    return soma;
}

console.log(soma(10,2))
console.log(subtracao(2,2))
console.log(multriplicacao(2,2))
console.log(divisao(2,2))

const calculadoraa = (num1, op, num2) => {
    const ops = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2
    }
    if(ops[op]){
        return ops[op](num1, num2)

    }
    return `Favor colocar a operação correta`

    //OU
    // if(op === '+') {
    //     return num1 + num2;
    // } 
    // if(op === '-') {
    //     return num1 - num2;
    // }
    // if(op === '*') {
    //     return num1 * num2;
    // }
    // if(op === '/') {
    //     return num1 / num2;
    // }
}

console.log(calculadoraa(10,'+', 10))

// 9) Modifique a calculadora do exerício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo: const soma = (num1, num2) => num1+num2 const calculadoraFn = () => calculadoraFn(10, soma, 20)

const calculadoraFn = (num1, op, num2) => {
    return op(num1, num2)

}

const some = (num1, num2) => num1 + num2
console.log(calculadoraFn(10,soma, 20))