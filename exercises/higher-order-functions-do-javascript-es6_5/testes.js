
const carro = {
    marca: 'fiat',
    modelo: 'gransiena',
    ano: 2012,
    cor: 'preto'
}
const { marca, cor } = carro;
const { cidade:divino = true } = carro;
const {cor: color} = carro;
//console.log(marca,cor);

//console.log(carro);

//console.log(divino);

//console.log(color);

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (array) => [array[2],array[1],array[0]];

console.log(swap(myList));