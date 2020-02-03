const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
var bodyParser = require("body-parser");

let urlencoder = bodyParser.urlencoded({ extended: false });
//app.use(express,static("/.view"));

class Partida {
    constructor() {
        this.codiPartida = '';
    }
    setCodPartida(codiPartida) {
        this.codiPartida = codiPartida;
    }
}
class Jugador {

    constructor(codiJugador) {

        this.codiJugador = codiJugador;
        this.cartesJ = [];
        this.apostaJ = "";
        this.turnJugador = "";
    }
    setCartes(cartesJ) {
        this.cartesJ = cartesJ;
    }
    setAposta(apostaJ) {
        this.apostaJ = apostaJ;
    }
    setTorn(turnJugador) {
        this.turnJugador = turnJugador;
    }

}
var partida = new Partida();
var j1 = new Jugador("1");
var j2 = new Jugador("2");
var j3 = new Jugador("3");
var j4 = new Jugador("4");
var turnJugador1 = 0;
var turnJugador2 = 0;
var turnJugador3 = 0;
var turnJugador4 = 0;

var Arraycartes = [
    { carta: '2 piques' }, { carta: '3 piques' }, { carta: '4 piques' }, { carta: '5 piques' }, { carta: '6 piques' }, { carta: '7 piques' }, { carta: '8 piques' }, { carta: '9 piques' }, { carta: '10 piques' }, { carta: 'J piques' }, { carta: 'Q piques' }, { carta: 'K piques' }, { carta: 'A piques' },
    { carta: '2 rombos' }, { carta: '3 rombos' }, { carta: '4 rombos' }, { carta: '5 rombos' }, { carta: '6 rombos' }, { carta: '7 rombos' }, { carta: '8 rombos' }, { carta: '9 rombos' }, { carta: '10 rombos' }, { carta: 'J rombos' }, { carta: 'Q rombos' }, { carta: 'K rombos' }, { carta: 'A rombos' },
    { carta: '2 trevol' }, { carta: '3 trevol' }, { carta: '4 trevol' }, { carta: '5 trevol' }, { carta: '6 trevol' }, { carta: '7 trevol' }, { carta: '8 trevol' }, { carta: '9 trevol' }, { carta: '10 trevol' }, { carta: 'J trevol' }, { carta: 'Q trevol' }, { carta: 'K trevol' }, { carta: 'A trevol' },
    { carta: '2 cors' }, { carta: '3 cors' }, { carta: '4 cors' }, { carta: '5 cors' }, { carta: '6 cors' }, { carta: '7 cors' }, { carta: '8 cors' }, { carta: '9 cors' }, { carta: '10 cors' }, { carta: 'J cors' }, { carta: 'Q cors' }, { carta: 'K cors' }, { carta: 'A cors' },
];

app.get("/inici", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.sendFile(path.join(__dirname + '/iniciar.html'));

})
app.get("/poker", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.sendFile(path.join(__dirname + '/poker.html'));

})

app.get("/css.css", (req, res) => {
    res.setHeader("Content-Type", "text/css ");
    res.sendFile(path.join(__dirname + '/css.css'));

})
app.get("/iniciar.js", (req, res) => {
    res.sendFile(path.join(__dirname + '/iniciar.js'));

})
app.get("/poker.js", (req, res) => {
    res.sendFile(path.join(__dirname + '/poker.js'));

})
app.post('/iniciarJoc', urlencoder, (req, res) => {
    var codiPartida1 = req.body.codiPartida1;
    partida.setCodPartida(codiPartida1);
    console.log(codiPartida1);
    res.send(codiPartida1);

});
app.get('/api/iniciarPartida/:codi', (req, res) => {
    if (partida.codiPartida == codi) {

    }
});

app.get('/obtenirCarta', (req, res) => {
    //var codidejugador = req.body.idJugador;
    var codijugador = req.query.idJugador;
    var x = Math.floor((Math.random() * Arraycartes.length + 1) + 1);
    var y = x - 1;
    //let cp = req.query.codiPartida2;


    if (codijugador == 1) {
        for (i = 0; i < Arraycartes.length; i++) {
            if (i == y && j1.cartesJ.length < 5) {
                j1.cartesJ.push(Arraycartes[i].carta);
                console.log(j1.cartesJ);
                Arraycartes.splice(i, 1);

            }
        }

    }
    else if (codijugador == 2) {
        for (i = 0; i < Arraycartes.length; i++) {
            if (i == y && j2.cartesJ.length < 5) {
                j2.cartesJ.push(Arraycartes[i].carta);
                console.log(j2.cartesJ);
                Arraycartes.splice(i, 1);
            }
        }

    }
    else if (codijugador == 3) {
        for (i = 0; i < Arraycartes.length; i++) {
            if (i == y && j3.cartesJ.length < 5) {
                j3.cartesJ.push(Arraycartes[i].carta);
                console.log(j3.cartesJ);
                Arraycartes.splice(i, 1);

            }
        }
    }
    else if (codijugador == 4) {
        for (i = 0; i < Arraycartes.length; i++) {
            if (i == y && j4.cartesJ.length < 5) {
                j4.cartesJ.push(Arraycartes[i].carta);
                console.log(j4.cartesJ);
                Arraycartes.splice(i, 1);

            }
        }
    }

    res.send("");
});

app.get('/mostrarCartes', (req, res) => {
    var jugador1Cartes1 = JSON.stringify(j1.cartesJ);
    var jugador2Cartes2 = JSON.stringify(j2.cartesJ);
    var jugador3Cartes3 = JSON.stringify(j3.cartesJ);
    var jugador4Cartes4 = JSON.stringify(j4.cartesJ);
    res.send("JUGADOR1" + jugador1Cartes1 + "JUGADOR2" + jugador2Cartes2 + "JUGADOR3" + jugador3Cartes3 + "JUGADOR4" + jugador4Cartes4);

});

app.get('/mostrarAposta', (req, res) => {
    var jugador1apuesta = j1.apostaJ;
    var jugador2apuesta = j2.apostaJ;
    var jugador3apuesta = j3.apostaJ;
    var jugador4apuesta = j4.apostaJ;
    var turn1 = j1.turnJugador;
    var turn2 = j2.turnJugador;
    var turn3 = j3.turnJugador;
    var turn4 = j4.turnJugador;
    res.send("Jugador 1: " + jugador1apuesta + " Turn: " + turn1 + " Jugador 2: " + jugador2apuesta + " Turn: " + turn2 + " Jugador 3: " + jugador3apuesta + " Turn: " + turn3 + " Jugador 4: " + jugador4apuesta + " Turn: " + turn4);

});


app.put('/tirarCarta', urlencoder, (req, res) => {
    let cartaTa;
    cartaTa = req.body.cartaAtreure;
    //let cartaFinal = cartaTa -1;
    let codiJugador = req.query.idJugador;
    console.log("Jugador número: " + codiJugador);
    console.log("Carta a treure: " + cartaTa);
    if (codiJugador == 1) {
        j1.cartesJ.splice(j1.cartesJ.indexOf(cartaTa), 1);
    }
    else if (codiJugador == 2) {
        j2.cartesJ.splice(j2.cartesJ.indexOf(cartaTa), 1);
    }
    else if (codiJugador == 3) {
        j3.cartesJ.splice(j3.cartesJ.indexOf(cartaTa), 1);
    }
    else if (codiJugador == 4) {
        j4.cartesJ.splice(j4.cartesJ.indexOf(cartaTa), 1);
    }
    else {
        cartaTa = 0;
    }
    // eval('j'+codiJugador+'.cartesJ.splice('+cartaFinal+',1)');
    res.send("");

});

app.put('/apostar', urlencoder, (req, res) => {
    let apuesta;
    apuesta = req.body.quantitat;
    let codiJugador = req.query.idJugador;
    // console.log ("Jugador número: " + codiJugador);
    // console.log("Quantitat apostada: " + apuesta);
    if (codiJugador == 1) {
        turnJugador1 = turnJugador1 + 1;
        j1.setTorn(turnJugador1);
        j1.setAposta(apuesta);
    }
    else if (codiJugador == 2) {
        turnJugador2 = turnJugador2 + 1;
        j2.setTorn(turnJugador2);
        j2.setAposta(apuesta);
    }
    else if (codiJugador == 3) {
        turnJugador3 = turnJugador3 + 1;
        j3.setTorn(turnJugador3);
        j3.setAposta(apuesta);
    }
    else if (codiJugador == 4) {
        turnJugador4 = turnJugador4 + 1;
        j4.setTorn(turnJugador4);
        j4.setAposta(apuesta);
    }


});

app.put('/passa', urlencoder, (req, res) => {
    let idJugador = req.query.idJugador;
    if (idJugador == 1) {
        turnJugador1 = turnJugador1 + 1;
        j1.setTorn(turnJugador1);
    } else if (turnJugador2 == 2) {
        turnJugador2 = turnJugador2 + 1;
        j2.setTorn(turnJugador2);
    } else if (idJugador == 3) {
        turnJugador3 = turnJugador3 + 1;
        j3.setTorn(turnJugador3);
    } else if (idJugador == 4) {
        turnJugador4 = turnJugador4 + 1;
        j4.setTorn(turnJugador4);
    }
    res.send("");

});

app.delete('/acabarJoc', (req, res) => {
    let codiPartida = req.query.codiPartida;
    console.log(codiPartida);
    console.log(partida.codiPartida);
    if (codiPartida == partida.codiPartida) {
        res.setHeader("Content-type", "text/html");

        Arraycartes = [
            { carta: '2 piques' }, { carta: '3 piques' }, { carta: '4 piques' }, { carta: '5 piques' }, { carta: '6 piques' }, { carta: '7 piques' }, { carta: '8 piques' }, { carta: '9 piques' }, { carta: '10 piques' }, { carta: 'J piques' }, { carta: 'Q piques' }, { carta: 'K piques' }, { carta: 'A piques' },
            { carta: '2 rombos' }, { carta: '3 rombos' }, { carta: '4 rombos' }, { carta: '5 rombos' }, { carta: '6 rombos' }, { carta: '7 rombos' }, { carta: '8 rombos' }, { carta: '9 rombos' }, { carta: '10 rombos' }, { carta: 'J rombos' }, { carta: 'Q rombos' }, { carta: 'K rombos' }, { carta: 'A rombos' },
            { carta: '2 trevol' }, { carta: '3 trevol' }, { carta: '4 trevol' }, { carta: '5 trevol' }, { carta: '6 trevol' }, { carta: '7 trevol' }, { carta: '8 trevol' }, { carta: '9 trevol' }, { carta: '10 trevol' }, { carta: 'J trevol' }, { carta: 'Q trevol' }, { carta: 'K trevol' }, { carta: 'A trevol' },
            { carta: '2 cors' }, { carta: '3 cors' }, { carta: '4 cors' }, { carta: '5 cors' }, { carta: '6 cors' }, { carta: '7 cors' }, { carta: '8 cors' }, { carta: '9 cors' }, { carta: '10 cors' }, { carta: 'J cors' }, { carta: 'Q cors' }, { carta: 'K cors' }, { carta: 'A cors' },
        ];
        j1.cartesJ = [];
        j2.cartesJ = [];
        j3.cartesJ = [];
        j4.cartesJ = [];
        j1.apostaJ = [];
        j2.apostaJ = [];
        j3.apostaJ = [];
        j4.apostaJ = [];
        partida.setCodPartida(0);
    }
});



app.listen(3000, () => console.log('inici servidor'));