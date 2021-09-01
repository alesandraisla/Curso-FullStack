//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce

const valores = [ 1,2,3,4,5];

const operadorDeSoma = (acumulado, atual) => acumulado + atual;

const somaDosvalores = valores.reduce(operadorDeSoma);

console.log('O somatório dos valores', valores, 'é:', somaDosvalores);

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter

const calculoDeValoresPares = item => item % 2 === 0;
const valoresPares = valores.filter(somenteValoresPares);

const filtrarValoresPares = valores.filter(calculoDeValoresPares).reduce(operadorDeSoma);

console.log('Os valores pares do array', valoresPares, 'são:', pares,'e a soma é:', filtrarValoresPares)