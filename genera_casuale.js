var numero_casuale0 = 0;
var numero_casuale1 = 0;
var numero_casuale2 = 0;
var prima_stringa = "";
var seconda_stringa = "";
var terza_stringa = "";
var stringa_completa = "";

function selezionaElemento(color) {
    document.body.style.background = color;
}
  
function impostaColoreChiaro() {
    vettore_colori_chiari = ['blue', 'red', 'pink', 'orange', 'green', 'white', 'purple'];
    rand = Math.floor(Math.random()*vettore_colori_chiari.length);
    selezionaElemento(vettore_colori_chiari[rand]);
}

function impostaColoreScuro(){
    vettore_colori_scuri = ['black', 'grey', 'brown'];
    rand = Math.floor(Math.random()*vettore_colori_scuri.length);
    selezionaElemento(vettore_colori_scuri[rand]);
}

/*VERIFICARE CHE UN CODICE RGB ESISTA. SE ESISTE APPLICARE QUEL COLORE. SE NON DOVESSE ESISTERE, VISUALIZZARE UN ALERT CHE DICE "IL COLORE
NON E' PRESENTE"*/

//PROCEDIMENTO:

    /*GENERARE PRIMA PARTE CODICE RGB E RIPORTARLO NELLA CASELLA DI TESTO
    GENERARE SECONDA PARTE CODICE RGB E RIPORTARLO NELLA CASELLA DI TESTO
    GENERARE TERZA PARTE CODICE RGB E RIPORTARLO NELLA CASELLA DI TESTO
    UNIRE LE TRE PARTI DEL CODICE RGB DA VIRGOLA E NUMERO
    SCANSIONARE LA PAGINA HTML E CONTROLLARE CHE QUEL CODICE ESISTA
    SE ESISTE, APPLICARE QUEL CODICE RGB
    ALTRIMENTI VISUALIZZARE UN ALERT CHE DICA "CODICE RGB NON PRESENTE"*/

    
function genera_prima_parte_colore_RGB(){
    numero_casuale0 = Math.round(Math.random()*255);
    document.getElementById('casella_testo0').value = numero_casuale0;
    return numero_casuale0;
}

function genera_seconda_parte_colore_RGB(){
    numero_casuale1 = Math.round(Math.random()*255);
    document.getElementById('casella_testo1').value = numero_casuale1;
    return numero_casuale1;
}

function genera_terza_parte_colore_RGB(){
    numero_casuale2 = Math.round(Math.random()*255);
    document.getElementById('casella_testo2').value = numero_casuale2;
    return numero_casuale2;
}

// numero_casuale0, numero_casuale1, numero_casuale2
function concatena_numero_RGB(){
    vettore_caratteri_speciali = [',', '.'];
    rand = Math.floor(Math.random()*vettore_caratteri_speciali.length);
    prima_stringa = numero_casuale0.toString();
    seconda_stringa = numero_casuale1.toString();
    terza_stringa = numero_casuale2.toString();
    stringa_completa = prima_stringa + vettore_caratteri_speciali[rand] + seconda_stringa + vettore_caratteri_speciali[rand] + terza_stringa;
    //var stringa_completa = prima_stringa + "." + seconda_stringa + "." + terza_stringa;
    document.getElementById('casella_testo3').value = stringa_completa;
    document.body.style.background = stringa_completa;

}

function conversione_RGB(){
    var colore_RGB = new Option().style;
    colore_RGB = stringa_completa;

    if(s.color == stringa_completa){
        document.body.style.background = stringa_completa;
    } else {
        alert("La stringa non corrisponde ad un codice RGB");
    }
}
//CONVERTIRE stringa_completa IN CODICE RGB



/*function converti_to_RGB(stringa_completa){
    var codice_RGB = "#" + stringa_completa;
    document.getElementById('casella_testo4').value = codice_RGB;
    
}*/

//CONTROLLARE CHE LA stringa_completa CORRISPONDA AD UN CODICE RGB VALIDO

/*function isValidColor(stringa_completa){
    var s = new Option().style;
    s.color = stringa_completa;

    if(s.color == stringa_completa){
        document.body.style.background = stringa_completa;
    } else {
        alert("La stringa non corrisponde ad un codice RGB");
    }
}*/

/*function CheckValidColor(color) {
    var e = document.getElementById('divValidColor');
    if (!e) {
        e = document.createElement('div');
        e.id = 'divValidColor';
    }
    e.style.borderColor = '';
    e.style.borderColor = color;
    var tmpcolor = e.style.borderColor;
    if (tmpcolor.length == 0) {
        return false;
    }
    return true;
}+/

// function call
var inputOK = CheckValidColor('rgb( 0, 0, 255)');

//STABILIRE UN NUMERO MAX DI VOLTE CHE L'UTENTE PUO' CLICCARE SU UN DETERMINATO BOTTONE
//OGNI VOLTA CHE L'UTENTE FA CLICK SUL BOTTONE, LUI INCREMENTA IL CONTATORE DI UN'UNITA'
    
/*function max_numero_volte(){
bottone0.onclick = 0;
    var numero_volte = 0;
    while(bottone0.onclick<=10){
        numero_volte++;
    }
    if(numero_volte==10){
        alert("Hai cliccato troppo volte");

    }
}*/

//STABILIRE UN NUM MAX DI VOLTE CHE L'UTENTE PUO' CLICCARE SUL BOTTONE. SE SUPERA 10, VISUALIZZARE UN ALERT

//CONTROLLARE CHE IL COLORE NERO NON SIA STATO GENERATO PIU' DI 3 VOLTE. IN CASO CONTRARIO VISUALIZZARE UN ALERT

//CONNESSIONE DATABASE