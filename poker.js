function enviarCodiP() {
    var xhr = new XMLHttpRequest();
    var codiPartida1 = localStorage.getItem("codi");
    xhr.open("POST", "iniciarJoc", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("codiPartida1=" + codiPartida1);

}

var idJugador = 0;
function enviarJugador1() {
    var xhr = new XMLHttpRequest();
    idJugador = 1;
    xhr.open("GET", "obtenirCarta?idJugador=" + idJugador, true);

    console.log(idJugador);

    xhr.send();
}
document.getElementById('jugador1').addEventListener("click", enviarJugador1, false);

function enviarJugador2() {
    var xhr = new XMLHttpRequest();
    idJugador = 2;
    xhr.open("GET", "obtenirCarta?idJugador=" + idJugador, true);

    console.log(idJugador);

    xhr.send();
}
document.getElementById('jugador2').addEventListener("click", enviarJugador2, false);

function enviarJugador3() {
    var xhr = new XMLHttpRequest();
    idJugador = 3;
    xhr.open("GET", "obtenirCarta?idJugador=" + idJugador, true);

    console.log(idJugador);

    xhr.send();
}
document.getElementById('jugador3').addEventListener("click", enviarJugador3, false);

function enviarJugador4() {
    var xhr = new XMLHttpRequest();
    idJugador = 4;
    xhr.open("GET", "obtenirCarta?idJugador=" + idJugador, true);

    console.log(idJugador);

    xhr.send();

}
document.getElementById('jugador4').addEventListener("click", enviarJugador4, false);


function rebreCartesJugador() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "mostrarCartes", true);
    xhr.onload = function (e) {

        console.log(this.response);
        cartes = this.response;
        cartesrebudes = document.getElementById("cartes");
        cartesrebudes.innerHTML = cartes;
    };
    xhr.send();
}
window.addEventListener("load", rebreCartesJugador, true);
setInterval(rebreCartesJugador, 3000);

function mostrarApostaJugador() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "mostrarAposta", true);
    xhr.onload = function (e) {

        console.log(this.response);
        aposta = this.response;
        console.log(aposta);
        apostarebuda = document.getElementById("apostes");
        apostarebuda.innerHTML = aposta;
    };
    xhr.send();
}
window.addEventListener("load", mostrarApostaJugador, true);
setInterval(mostrarApostaJugador, 3000);


function esborrarCarta() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let cartaAtreure = document.getElementById('treurec1').value;
    let idJugador = 1;
    xhr.open("PUT", "tirarCarta" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("cartaAtreure=" + cartaAtreure);
}

document.getElementById('submitc1').addEventListener('click', esborrarCarta, false);


function esborrarCarta2() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let cartaAtreure = document.getElementById('treurec2').value;
    let idJugador = 2;
    xhr.open("PUT", "tirarCarta" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("cartaAtreure=" + cartaAtreure);
}
document.getElementById('submitc2').addEventListener('click', esborrarCarta2, false);

function esborrarCarta3() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");

    let cartaAtreure = document.getElementById('treurec3').value;


    let idJugador = 3;
    xhr.open("PUT", "tirarCarta" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("cartaAtreure=" + cartaAtreure);
}
document.getElementById('submitc3').addEventListener('click', esborrarCarta3, false);

function esborrarCarta4() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");

    let cartaAtreure = document.getElementById('treurec4').value;


    let idJugador = 4;
    xhr.open("PUT", "tirarCarta" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("cartaAtreure=" + cartaAtreure);
}
document.getElementById('submitc4').addEventListener('click', esborrarCarta4, false);

function apostarJugador1() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let quantitat = document.getElementById('apostac1').value;
    let idJugador = 1;
    xhr.open("PUT", "apostar" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("quantitat=" + quantitat);
}

document.getElementById('submitac1').addEventListener('click', apostarJugador1, false);

function apostarJugador2() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let quantitat = document.getElementById('apostac2').value;
    let idJugador = 2;
    xhr.open("PUT", "apostar" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("quantitat=" + quantitat);
}

document.getElementById('submitac2').addEventListener('click', apostarJugador2, false);

function apostarJugador3() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let quantitat = document.getElementById('apostac3').value;
    let idJugador = 3;
    xhr.open("PUT", "apostar" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("quantitat=" + quantitat);
}

document.getElementById('submitac3').addEventListener('click', apostarJugador3, false);

function apostarJugador4() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let quantitat = document.getElementById('apostac4').value;
    let idJugador = 4;
    xhr.open("PUT", "apostar" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("quantitat=" + quantitat);
}

document.getElementById('submitac4').addEventListener('click', apostarJugador4, false);




function pasarTurnJ1() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let idJugador = 1;
    xhr.open("PUT", "passa" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.send();
}
document.getElementById('turn1').addEventListener('click', pasarTurnJ1, false);

function pasarTurnJ2() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let idJugador = 2;
    xhr.open("PUT", "passa" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.send();
}
document.getElementById('turn2').addEventListener('click', pasarTurnJ2, false);

function pasarTurnJ3() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let idJugador = 3;
    xhr.open("PUT", "passa" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.send();
}
document.getElementById('turn3').addEventListener('click', pasarTurnJ3, false);

function pasarTurnJ4() {
    let xhr = new XMLHttpRequest();
    let codiPartida3 = localStorage.getItem("codi");
    let idJugador = 4;
    xhr.open("PUT", "passa" + "?codiPartida3=" + codiPartida3 + "&idJugador=" + idJugador, true);
    xhr.send();
}
document.getElementById('turn4').addEventListener('click', pasarTurnJ4, false);

function borrarPartida() {
    var xhr = new XMLHttpRequest();
    let codiPartida = localStorage.getItem("codi");
    localStorage.clear();
    xhr.open("DELETE", "acabarJoc" + "?codiPartida=" + codiPartida, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
    window.location.href = "http://localhost:3000/inici";
}

document.getElementById('netejar').addEventListener('click', borrarPartida, false);

window.addEventListener("load", enviarCodiP, true);



