const PromiseExercise = () => {
    testPromise = new Promise ((resolve,reject) => {
     const arrayMath = Array.from(
          {length:10},
          () => Math.floor(Math.random() * 50) +1,
      );
  
      const soma = arrayMath.map(number => number * number)
        .reduce((acc, number) => acc + number); 
      soma < 8000 ? resolve(soma) : reject(soma);
    });
    testPromise.then((soma) => console.log(`resolvido codigo :${soma}`)).catch((soma) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!` ));
  }
  PromiseExercise();