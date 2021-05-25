const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const AnimalsAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const ageanimal = Animals.filter((animal) => animal.age === age);
      if (ageanimal.length !== 0) {
        return resolve(ageanimal);
      };
      return reject('Nenhum animal encontrado!');
    }, 100);
  })
);

const ageAnimalGet = (age) => {
    return AnimalsAge(age)
      .then(animal => animal);
};


describe('test function AnimalsAge', () => {
    it('verificar animal com possivel idade', () => {
        expect.assertions(1);
        const animal = [{name: 'Preguiça', age: 5, type: 'Cat' }];
        return expect(AnimalsAge(5)).resolves.toEqual(animal);
    });
    it('verificar error ', () => {
        expect.assertions(1);
        const erro = 'Nenhum animal encontrado!';
        return expect(AnimalsAge(10)).rejects.toBe(erro);
    })
});