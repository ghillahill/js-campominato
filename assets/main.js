//
// programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.
//
//
var listaMine = [];
var leMiePosizioni = [];
var numBombe = 16;
var maxBombe = 100;
var maxPoint = maxBombe - numBombe;

var difficolta = parseInt(prompt("Scegli difficoltà tra 0 / 1 / 2 | Dove 2 è la difficoltà più alta."));

getDifficolta(difficolta);

function getDifficolta(scegliDifficoltà){
    if (scegliDifficoltà == 0) {
        maxBombe == 100;
        alert("Hai scelto la difficoltà 0!");
    }
    else if (scegliDifficoltà == 1) {
        maxBombe == 80;
        alert("Hai scelto la difficoltà 1!");
    }
    else if (scegliDifficoltà == 2){
        maxBombe == 50;
        alert("Hai scelto la difficoltà 2!");
    }
    else if (scegliDifficoltà > 2) {
        alert("Scegli una difficoltà che va da 0 a 2!")
        var difficolta = parseInt(prompt("Scegli difficoltà tra 0 / 1 / 2 | Dove 2 è la difficoltà più alta."));
    }
}


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

//Variabile sentinella che mi permette in caso diventasse vera di uscire dal loop
var isBombaTrovata = false;

do {
    // verifico che laMiaScelta non sia presente nell'array delle mine
    // listaMine.includes(laMiaScelta) == false

    // verifico che la mia scelta non sia già presente tra quelli inseriti
    // leMiePosizioni.includes(laMiaScelta) == false
    var laMiaScelta = parseInt(prompt('Inserisci un numero'));

    var isGameOver = isUnaMina(laMiaScelta,listaMine);

    if (isGameOver == true) {
        isBombaTrovata = true;
        alert('Hai perso, totalizzando: ' + leMiePosizioni.length + ' punti.');

    }
    else if (leMiePosizioni.includes(laMiaScelta) == false) {
        leMiePosizioni.push(laMiaScelta);

    }
    else {
        // avviso l'utente che è duplicato
        alert('Numero già inserito!');
    }

} while (isBombaTrovata == false && leMiePosizioni.length < maxPoint );

//console.log(laMiaScelta);

//Condizione di vittoria
if (leMiePosizioni.length == maxPoint ) {
    alert('hai vinto totalizzando '+ leMiePosizioni.length + ' punti!');

}



//---------------FUNZIONI---------------



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
