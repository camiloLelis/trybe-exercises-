
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// referencia para executar o codigo :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://qastack.com.br/programming/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
function containsA() {
  // escreva seu código aqui
  return names.reduce((acc,curr) => acc + (curr.match(/[a,A]/g)).length,0)
}
//console.log( containsA());
assert.deepStrictEqual(containsA(), 20);