// Array con i cognomi
var cognomi = ["Carone", "Baglini", "Caiello", "Campagnolo", "Carnaroli", "Chimento", "Corneli", "Correggia", "Di Giacomantonio", "Di Pilla", "Bottini", "De Marco", "Eboulet", "Palumbo", "Doballah", "Fiore", "Franzone", "Lanzi", "Arimatea", "Logozzo", "Lega", "Lugli", "Pacifico", "Ayari", "Pandolfi", "Magliano", "Petracci", "Riccio", "Magliozzi", "Sergata", "Pedone", "Tarantino", "Pari", "Trotta"];

// chiedo all'utente di inserire il proprio cognome
var cognomeUtente;
cognomeUtente = prompt('Inserisci il tuo cognome').toUpperCase();

// lo pusho nella lista
cognomi.push(cognomeUtente);

// ordino i cognomi secondo l'alfabeto
cognomi.sort();
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('lista_cognomi').innerHTML += "<li>" + "utente nr. " + (i+1) + " " + cognomi[i] + "</li>";
}
