// Definiamo l'oggetto libro
let book = {
    Titolo: "Il Signore degli Anelli",
    Autore: "J.R.R. Tolkien",
    AnnoDiPubblicazione: 1954,
    Genere: "Fantasy",
    NumeroDiPagine: 1178
  };
  
  // Stampiamo le proprietà dell'oggetto sulla console
  for (let key in book) {
    console.log(`${key} -> ${book[key]}`);
  }