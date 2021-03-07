/* let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
    console.log (elementoOndeVoceEsta);

// segundo parte

console.log(elementoOndeVoceEsta.parentNode);

// terceira parte 

document.querySelector('#primeiroFilhoDoFilho').innerHTML='filho meuuuu..!!!';

//quarta parte

console.log(document.querySelector('#pai').firstElementChild);

// quinta parte

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// sexta parte

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// setima parte


console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// oitava parte



console.log(document.querySelector('#pai').childNodes[5]);

//Crie um irmão para elementoOndeVoceEsta 

let child = document.querySelector('#elementoOndeVoceEsta').parentNode;
let child2= document.createElement('div');
child.appendChild(child2).innerHTML ='irmão';
child2.className = 'nasa'

// Crie um filho para elementoOndeVoceEsta .

let child3 = document.querySelector('#elementoOndeVoceEsta');
let child4= document.createElement('div');
child3.appendChild(child4).innerHTML ='filho';

//Crie um filho para primeiroFilhoDoFilho .

let pegandoElemento = document.querySelector('#primeiroFilhoDoFilho ');
let criandoNovoElemento = document.createElement('div');
pegandoElemento.appendChild(criandoNovoElemento).innerText ='filho para primeiroFilhoDoFilho';
criandoNovoElemento.id = 'filhoParaPrimeiroFilhoDoFilho';

// A partir desse filho criado, acesse terceiroFilho .

let acessarTerceiroFilho = document.querySelector('#filhoParaPrimeiroFilhoDoFilho').parentNode.nextElementSibling.nextElementSibling.parentNode.nextElementSibling;

console.log(acessarTerceiroFilho);

//Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
//let listaDeIds = document.querySelectorAll('#paiDoPai')[0].id;
console.log(document.querySelectorAll('#paiDoPai')[0].id);
//console.log(listaDeIds[0].id); */

//let tudo = document.querySelectorAll('body').length;
/* let tudo = document.querySelector('#pai');
let delet= document.querySelector('#elementoOndeVoceEsta');
tudo.removeChild(delet); 
 */
//let pegaTudo = SELECTOR => document.querySelectorAll('div');
let pegaTudo = document.querySelectorAll('div');
//console.log(pegaTudo.length);
//console.log(pegaTudo[2]);
//pegaTudo[1].removeChild(pegaTudo[2]);
 
 for (let index = 2; index < pegaTudo.length; index++) {
    let element = pegaTudo[index];
    console.log(element);
    if (element.id === 'primeiroFilho' || element.id === 'segundoEUltimoFilhoDoFilho' || element.id === 'terceiroFilho' || element.id ==='quartoEUltimoFilho'){
        let x = pegaTudo[index].parentNode;
        console.log(x);
        let y= pegaTudo[index]
        console.log(y);
        x.removeChild(y);

    }

} 

