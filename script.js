const allQuotes = {
  quote: ['I\'m the king of the world.', 
  'My precious.', 
  'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.', 
  'May the Force be with you.',
  'I am bad and that is good, I will never be good and that\'s not bad, there\'s no one I\'d rather be than me.',
  'To infinity and beyond!'],

  movie: ['Titanic', 
  'The Lord of The Rings: Two Towers', 
  'Forrest Gump',
  'Star Wars',
  'Wreck It Ralph',
  'Toy Story'],

  year: [1997, 2002, 1994, 1997, 2012, 1995],
  random() {
    const index = Math.floor(Math.random() * allQuotes.quote.length);
    console.log(`"${this.quote[index]}" ${this.movie[index]}, ${this.year[index]}`);
  }
};

allQuotes.random();
