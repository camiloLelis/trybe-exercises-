function compileAndroidCode() {
    throw new Error('você está usando o JDK errado');
  }
  
  test('compilando para android segue conforme esperado', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // Você também pode usar a mensagem exata de erro ou uma regexp
    expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });