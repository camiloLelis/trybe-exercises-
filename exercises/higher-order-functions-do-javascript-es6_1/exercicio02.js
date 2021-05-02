/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5
 recebendo como parâmetros o número apostado 
e uma função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

function checkDraw(bet, drawn) {
    return bet === drawn;
}

const prizeDraw = (numberBet, callback) => {
    const generate = Math.floor((Math.random()*5)+1);
    const check = callback(numberBet, generate);
    //console.log(generate);
    return (check === true) ? "Parabéns você ganhou": "Tente novamente";
}
console.log(prizeDraw(2, checkDraw));
