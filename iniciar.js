var emmagatzemar = {
    taula: document.getElementById('taula'),
    desar: function () {
        localStorage.setItem("codi", document.getElementById('codi').value);
     
        
    },
    // netejar: function () {
    //     localStorage.clear();
    //     emmagatzemar.mostrar();
    //     emmagatzemar.esborrarTaula();
    // },


    esborrarTaula: function() {
        while (taula.rows.length > 0) {
            taula.deleteRow(0);
        }
    },
}
function redirigir(){
    window.location.href="http://localhost:3000/poker"

}


/*function enviarCodiP() {
    var xhr = new XMLHttpRequest();
    var codiPartida1 = localStorage.getItem("codi");
    xhr.open("POST", "iniciarJoc", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("codiPartida1=" + codiPartida1);
   
}*/

document.getElementById('submit').addEventListener('click', emmagatzemar.desar, false);
// document.getElementById('netejar').addEventListener('click', emmagatzemar.netejar, false);
document.getElementById('submit').addEventListener('click', redirigir, false);

