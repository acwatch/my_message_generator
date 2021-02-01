const allQuotes = {
  quote: ['I\'m the king of the world.', 
  'My precious.', 
  'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.', 
  'May the Force be with you.'],
  movie: ['Titanic', 
  'The Lord of The Rings: Two Towers', 
  'Forrest Gump',
  'Star Wars'],
  year: [1997, 2002, 1994, 1997],
  random() {
    const index = Math.floor(Math.random() * allQuotes.quote.length);
    console.log(`"${this.quote[index]}" ${this.movie[index]}, ${this.year[index]}`);
  }
};

allQuotes.random();
