// Array con i cognomi
var cognomi = ["Carone", "Baglini", "Caiello", "Campagnolo", "Carnaroli", "Chimento", "Corneli", "Correggia", "Di Giacomantonio", "Di Pilla", "Bottini", "De Marco", "Eboulet", "Palumbo", "Doballah", "Fiore", "Franzone", "Lanzi", "Arimatea", "Logozzo", "Lega", "Lugli", "Pacifico", "Ayari", "Pandolfi", "Magliano", "Petracci", "Riccio", "Magliozzi", "Sergata", "Pedone", "Tarantino", "Pari", "Trotta"];

// chiedo all'utente di inserire il proprio cognome
var cognomeUtenteInput;
cognomeUtenteInput = prompt('Inserisci il tuo cognome');

var cognomeUtente = cognomeUtenteInput.charAt(0).toUpperCase() + cognomeUtenteInput.slice(1)

// lo pusho nella lista
cognomi.push(cognomeUtente);

// ordino i cognomi secondo l'alfabeto
cognomi.sort();
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('lista_cognomi').innerHTML += "<li>" + "utente nr. " + (i+1) + " " + cognomi[i] + "</li>";

  var posizione = cognomi.indexOf(cognomeUtente);
  document.getElementById('numero_posizione').innerHTML = (posizione+1);
  console.log(posizione);
}
