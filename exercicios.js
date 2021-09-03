//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce

const valores = [ 1,2,3,4,5];

const operadorDeSoma = (acumulado, atual) => acumulado + atual;

const somaDosvalores = valores.reduce(operadorDeSoma);

console.log('O somatório dos valores', valores, 'é:', somaDosvalores);

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
