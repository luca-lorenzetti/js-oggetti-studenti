/* Descrizione:

Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

$(function(){

    // 1. Creazione dell'oggetto studente
    var studente = {
        nome: "",
        cognome: "",
        eta: 0
    }

    // 2. Ciclo per stampare proprietà dell'oggetto studente
    console.log("PROPRIETA' STUDENTE: \n");

    for (let key in studente) {
        console.log(key+"\n");
    }


    // 3. Creazione array di studenti
    var studenti = [{
        nome: "Marco",
        cognome: "Rossi",
        eta: 15
    },{
        nome: "Lucia",
        cognome: "Bianchi",
        eta: 17
    }];

    studenti.push({nome: "Maria", cognome: "Franconi", eta: 13});

    
    // 4. Stampare per ognuno di essi, nome e cognome
    console.log("\n\nLista studenti:\n")

    for (let i = 0; i < studenti.length; i++) {
       console.log(studenti[i].nome + " " + studenti[i].cognome + "\n");
    }


    // 5. Attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età

    var studenteIns = {};
    
    for ( let key in studente) {
   
           if( typeof studenti[0][key] === 'number'){
            studenteIns[key] =  parseInt(prompt("Inserire " + key + " dello studente"));
           }
           else{
            studenteIns[key] =  prompt("Inserire " + key + " dello studente");
           }
     
    }
    studenti.push(studenteIns);



    // STAMPA FINALE DELL'ARRAY DEGLI STUDENTI
    console.log(studenti);
});

