let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
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
 //console.log(document.querySelectorAll('#paiDoPai')[0].id);
//console.log(listaDeIds[0].id);

let tudo = document.querySelectorAll('#paiDoPai');

for (let index = 0; index < tudo.length; index++) {
    if (tudo[index].id === 'elementoOndeVoceEsta'){
        tudo.removeChild(tudo[index].id);
    }

}