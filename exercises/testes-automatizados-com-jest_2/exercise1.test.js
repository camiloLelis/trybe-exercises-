const { it, expect } = require("@jest/globals");
const { doesNotMatch } = require("assert/strict");
const { describe } = require("yargs");

const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  };

it('callback de uma função uppercase', done =>{
  uppercase('teste',(result) => {
    expect(result).toBe('TESTE');
    done();
  });
});    