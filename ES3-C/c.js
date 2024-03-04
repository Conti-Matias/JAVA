// Chiediamo all'utente di inserire due numeri e un'operazione matematica
let numero1 = Number(prompt("Inserisci il primo numero:"));
let numero2 = Number(prompt("Inserisci il secondo numero:"));
let operazione = prompt("Inserisci l'operazione matematica (+, -, *, /, **):");

// Verifichiamo se l'input dell'utente è valido
if (Number.isNaN(numero1) || Number.isNaN(numero2) || !(operazione === "+" || operazione === "-" || operazione === "*" || operazione === "/" || operazione === "**")) {
  // Se l'input non è valido, visualizziamo un messaggio di errore
  console.log("Errore: Input non valido.");
} else {
  // Se l'input è valido, eseguiamo l'operazione matematica corrispondente
  let risultato;
  switch (operazione) {
    case "+":
      risultato = numero1 + numero2;
      break;
    case "-":
      risultato = numero1 - numero2;
      break;
    case "*":
      risultato = numero1 * numero2;
      break;
    case "/":
      risultato = numero1 / numero2;
      break;
    case "**":
      risultato = Math.pow(numero1, numero2);
      break;
  }
  // Stampiamo il risultato sulla console se è definito
  if (typeof risultato !== 'undefined') {
    console.log("Il risultato è:", risultato);
  } else {
    console.log("Errore: Operazione non supportata.");
  }
}