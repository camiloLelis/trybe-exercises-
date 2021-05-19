const { encode, decode} = require('./encodeDecode.js');

describe('encode e decode', () => {
  test('testa se ta definido', () => {
    expect(encode).toBeDefined();
  })
  test('vogais em number', () => {
    expect(encode('a')).toBe('1');    
  });
  test('se é function ', () => {
    expect(typeof encode).toEqual('function');
  });
  test('test', () => {
    expect(typeof encode).toBe('function');
  });
  test('se é function ', () => {
    expect(typeof decode).toEqual('function');
  });
  test('se esta definida ', () => {
    expect(decode).toBeDefined();
  });
  test('numeros em vogais ', () => {
    expect(decode('1')).toBe('a');
  });
  it('se tem tamanho de entyrada e retorno', () => {
      expect(encode('123456').length).toEqual(6)
  }); 
  it('se tem tamanho de entyrada e retorno', () => {
    expect(decode('camilo').length).toEqual(6)
}); 
});