//
// programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.
//
//
var listaMine = [];
var leMiePosizioni = [];
var numBombe = 2;
var maxBombe = 5;
var maxPoint = maxBombe - numBombe;

while (listaMine.length < numBombe) {

    var minaRandom = getRndInteger(1,maxBombe);
    // verifico se la bomba è già presente nell'array
    // la inserisco solo se non è presente
    if (listaMine.includes(minaRandom) == false) {
        listaMine.push(minaRandom);
    }
}

console.log('Lista mine: ',listaMine);


// devo chiedere un numero all'utente
//verifico che il numero non sia presente nell'array listaMine
// se è presente, il gioco finisce e viene comunicato il risultato
// se non è presente continuo a inserire numeri fino ad un massimo di 84 (100 - tot bombe)

var isBombaTrovata = false;

do {

    var laMiaScelta = parseInt(prompt('Inserisci un numero'));

    // verifico che laMiaScelta non sia presente nell'array delle mine
    // listaMine.includes(laMiaScelta) == false

    // verifico che la mia scelta non sia già presente tra quelli inseriti
    // leMiePosizioni.includes(laMiaScelta) == false

    var isGameOver = isUnaMina(laMiaScelta,listaMine);

    if (isGameOver == true) {

        isBombaTrovata = true;
        alert('Hai perso, totalizzando: ' + leMiePosizioni.length + ' punti.');

    } else if (leMiePosizioni.includes(laMiaScelta) == false) {

        leMiePosizioni.push(laMiaScelta);

    } else {
        // avviso l'utente che è duplicato
        alert('Numero già inserito!');
    }

} while (isBombaTrovata == false && leMiePosizioni.length < maxPoint );

console.log(laMiaScelta);

if (leMiePosizioni.length == maxPoint ) {

    alert('hai vinto totalizzando '+ leMiePosizioni.length + ' punti!');

}


function isUnaMina( sceltaUtente , arrayMine  ) {

    var controllo = false;

    if (arrayMine.includes(sceltaUtente) == true) {
        controllo = true;
    }

    return controllo;

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
