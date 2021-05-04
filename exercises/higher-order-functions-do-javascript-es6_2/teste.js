const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  //console.log( books[0].author.name);

 /*  function authorBornIn1947() {
    // escreva aqui o seu código
    const { name } = books.find(({ author }) => author.birthYear === 1947).author;
    return name;
}
  console.log( authorBornIn1947() ); */

/* function smallerName() {
  let nameBook;
    // escreva aqui o seu código
  const titleMinor = ({name}) => ( !nameBook || name.length < nameBook.length)? nameBook = name :null;
    
  books.forEach(titleMinor); 
    // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
  console.log( smallerName() );
  //console.log(books[0].name.length); */

 /*  function getNamedBook() {
    // escreva seu código aqui
    const {author, genre, id, name, releaseYear} = books
      .find(({name}) => name.length === 26);
      return {author, genre, id, name, releaseYear};
  }
  console.log(getNamedBook()); */

  /*  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991, */

  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((a,b) => a-b);
    
  }
console.log(booksOrderedByReleaseYearDesc());
