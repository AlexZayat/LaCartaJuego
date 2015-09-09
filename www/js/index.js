var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function myFunction() {
    alert("Reglas\nVes una carta. Tienes que elegir si la carta que saldrá siguiente será mayor, o menor. Si aciertas, es el turno del otro; pero si no aciertas, tienes que tomar un trago.\n\nTambién puedes intentar adivinar el número exacto que saldrá! Si aciertas, todos los demás deberán tomar 3 tragos. ¡Pero cuidado! Si te equivocas, tú debes tomar 2!\n\n ¡Buena suerte!");
}


function eligeNumero(){
    alert("ELIGE UN NUMERO O UNA FIGURA Y DILO EN VOZ ALTA PARA QUE TODOS LO SEPAN, LUEGO APRETA OK Y VE QUE SALE!.\n¡BUENA SUERTE!");
    var palo = Math.floor((Math.random() * 4) + 1);
    var numero = Math.floor((Math.random() * 13) + 1);	
    document.getElementById("img").src="img/"+palo+numero+".png";
    window.numeroAnterior = numero;
}


function masBaja() {
    if (window.primera == 1){
        var palo = Math.floor((Math.random() * 4) + 1);
        var numero = Math.floor((Math.random() * 13) + 1);	
        document.getElementById("img").src="img/"+palo+numero+".png";
        if (numero < window.numeroAnterior){
            document.getElementById("foto").style="background-color: green;";
            document.getElementById("fotoOK").src="img/bien.png";
            }
        else{
            document.getElementById("foto").style="background-color: red;";
            document.getElementById("fotoOK").src="img/mal.jpg";
            
            }
        window.numeroAnterior = numero;
        
        
        
        }
    else {
        var palo = Math.floor((Math.random() * 4) + 1);
        var numero = Math.floor((Math.random() * 13) + 1);	
        document.getElementById("img").src="img/"+palo+numero+".png";
        if (numero < 7){
            document.getElementById("foto").style="background-color: green;";
            document.getElementById("fotoOK").src="img/bien.png";
            }
        else{
            document.getElementById("foto").style="background-color: red;";
            document.getElementById("fotoOK").src="img/mal.jpg";
            
            }
        window.numeroAnterior = numero;
        window.primera = 1;
    }
}

function masAlta() {
    if (window.primera == 1){
        var palo = Math.floor((Math.random() * 4) + 1);
        var numero = Math.floor((Math.random() * 13) + 1);	
        document.getElementById("img").src="img/"+palo+numero+".png";
        if (numero > window.numeroAnterior){
            document.getElementById("foto").style="background-color: green;";
            document.getElementById("fotoOK").src="img/bien.png";
            }
        else{
            document.getElementById("foto").style="background-color: red;";
            document.getElementById("fotoOK").src="img/mal.jpg";
            
            }
        window.numeroAnterior = numero;
        
        }
    else {
        var palo = Math.floor((Math.random() * 4) + 1);
        var numero = Math.floor((Math.random() * 13) + 1);	
        document.getElementById("img").src="img/"+palo+numero+".png";
        if (numero > 7){
            document.getElementById("foto").style="background-color: green;";
            document.getElementById("fotoOK").src="img/bien.png";
            }
        else{
            document.getElementById("foto").style="background-color: red;";
            document.getElementById("fotoOK").src="img/mal.jpg";
     }
        window.numeroAnterior = numero;
        window.primera = 1;
    }
}


var TimAbajo;
var TimArriba;
window.segundoActual =10;
function startQuienEs(){
    tiempoParaAbajo();
    tiempoParaArriba();
    
    

}



function timesUp(){
    alert("Termino el tiempo");
     }

function tiempoParaArriba(){
    TimArriba = setInterval(cambiarSegundo,1000);
}

function cambiarSegundo(){
    window.segundoActual = window.segundoActual - 1;
    document.getElementById("numero")
        .innerHTML = segundoActual;
}

function tiempoParaAbajo(){
         TimAbajo = setTimeout(timesUp,10000);
}



function conectar(){
        
        var db = WINDOW.openDatabase("test", "1.0", "Test DB", 1000000);
        alert("funciona");
        db.transaction(PopulateDB, errorCB);
        
        }

function PopulateDB(tx) {
         tx.executeSql("CREATE TABLE IF NOT EXISTS Elemento(id PRIMARY KEY ASC,nombre TEXT,prohibido1 TEXT,prohibido2 TEXT, prohibido3 TEXT);");
         //tx.executeSql("Select * from Materia",[],ejecutar,errorCB); 
           alert("hola");
            }
function errorCB(err) {
        alert("Error processing SQL: "+err.message);
        }