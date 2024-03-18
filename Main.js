
var whiteBall = src="Imagenes/BolaBlanca.PNG";
var yellowBall = src="Imagenes/BolaAmarilla.PNG";
var orangeBall = src="Imagenes/BolaNaranja.PNG";
var redBall = src="Imagenes/BolaRoja.PNG";

localStorage.setItem('whiteBall', whiteBall);
localStorage.setItem('yellowBall', yellowBall);
localStorage.setItem('orangeBall', orangeBall);
localStorage.setItem('redBall', redBall);

document.getElementById('imgBall1').src = localStorage.getItem('whiteBall');
document.getElementById('imgBall2').src = localStorage.getItem('yellowBall');
document.getElementById('imgBall3').src = localStorage.getItem('whiteBall');
document.getElementById('imgBall4').src = localStorage.getItem('yellowBall');

document.getElementById('lblNumPlayers').hidden = true
document.getElementById('contNamePlayer3').style.display = "none";
document.getElementById('contNamePlayer4').style.display = "none";
document.getElementById('contComingSoon').style.display = "none";


function getNumPlayers() {
    var numPlayers = document.getElementsByName('numPlayers');
    for(i = 0; i < numPlayers.length; i++) {
        if(numPlayers[i].checked)
        document.getElementById("lblNumPlayers").innerHTML = numPlayers[i].value;
    }
    if (document.getElementById("lblNumPlayers").innerHTML == "2Players") {
        document.getElementById('imgBall3').src = localStorage.getItem('whiteBall');
        document.getElementById('contNamePlayer3').style.display = "none";
        document.getElementById('contNamePlayer4').style.display = "none";
        document.getElementById('contComingSoon').style.display = "none";
    }
    else if (document.getElementById("lblNumPlayers").innerHTML == "3Players" ) {
        document.getElementById('imgBall3').src = localStorage.getItem('orangeBall');
        document.getElementById('contNamePlayer3').style.display = "flex";
        document.getElementById('contNamePlayer4').style.display = "none";
        document.getElementById('contComingSoon').style.display = "flex";
    }
    else if (document.getElementById("lblNumPlayers").innerHTML == "4Players" ) {
        document.getElementById('imgBall3').src = localStorage.getItem('whiteBall');
        document.getElementById('contNamePlayer3').style.display = "flex";
        document.getElementById('contNamePlayer4').style.display = "flex";
        document.getElementById('contComingSoon').style.display = "flex";
    }
}



function newGame() {

    var runTo = document.getElementById('rangeRunTo').value;
    var maxInnings = document.getElementById('rangeMaxInnings').value;
    var shottime = document.getElementById('rangeShottime').value;
    var maxTimeouts = document.getElementById('rangeMaxTimeouts').value;

    var namePlayer1 = document.getElementById('inPlayer1').value;
    var namePlayer2 = document.getElementById('inPlayer2').value;
    var namePlayer3 = document.getElementById('inPlayer3').value;
    var namePlayer4 = document.getElementById('inPlayer4').value;

    var hcpPlayer1 = document.getElementById('inHcp1').value;
    var hcpPlayer2 = document.getElementById('inHcp2').value;
    var hcpPlayer3 = document.getElementById('inHcp3').value;
    var hcpPlayer4 = document.getElementById('inHcp4').value;

    var Ball1 = document.getElementById('imgBall1').src;
    var Ball2 = document.getElementById('imgBall2').src;

    var innings = 0;
    var inningsPlayer1 = 0;
    var inningsPlayer2 = 0;
    var highestRunPlayer1 = 0;
    var highestRunPlayer2 = 0;
    var timeoutsPlayer1 = maxTimeouts;
    var timeoutsPlayer2 = maxTimeouts;
    var pointsPlayer1 = 0;
    var pointsPlayer2 = 0;
    var runPlayer1 = 0;
    var runPlayer2 = 0;


    localStorage.setItem('runTo', runTo);
    localStorage.setItem('maxInnings', maxInnings);
    localStorage.setItem('shottime', shottime);
    localStorage.setItem('maxTimeouts', maxTimeouts);

    if (namePlayer1 == "") {localStorage.setItem('nameHcpPlayer1', "Player 1")} 
    else if (hcpPlayer1 == "") {localStorage.setItem('nameHcpPlayer1', namePlayer1)}
    else {localStorage.setItem('nameHcpPlayer1', namePlayer1 + " (" + hcpPlayer1 + ")")};

    if (namePlayer2 == "") {localStorage.setItem('nameHcpPlayer2', "Player 2")}
    else if (hcpPlayer2 == "") {localStorage.setItem('nameHcpPlayer2', namePlayer2)}
    else {localStorage.setItem('nameHcpPlayer2', namePlayer2 + " (" + hcpPlayer2 + ")")};

    if (namePlayer3 == "") {localStorage.setItem('nameHcpPlayer3', "Player 3")}
    else if (hcpPlayer3 == "") {localStorage.setItem('nameHcpPlayer3', namePlayer3)}
    else {localStorage.setItem('nameHcpPlayer3', namePlayer3 + " (" + hcpPlayer3 + ")")};

    if (namePlayer4 == "") {localStorage.setItem('nameHcpPlayer4', "Player 4")} 
    else if (hcpPlayer4 == "") {localStorage.setItem('nameHcpPlayer4', namePlayer4)}
    else {localStorage.setItem('nameHcpPlayer4', namePlayer4 + " (" + hcpPlayer4 + ")")};

    localStorage.setItem('hcpPlayer1', hcpPlayer1);
    localStorage.setItem('hcpPlayer2', hcpPlayer2);
    localStorage.setItem('hcpPlayer3', hcpPlayer3);
    localStorage.setItem('hcpPlayer4', hcpPlayer4);

    localStorage.setItem('Ball1', Ball1);
    localStorage.setItem('Ball2', Ball2);

    localStorage.setItem('innings', innings);
    localStorage.setItem('inningsPlayer1', inningsPlayer1);
    localStorage.setItem('inningsPlayer2', inningsPlayer2);
    localStorage.setItem('highestRunPlayer1', highestRunPlayer1);
    localStorage.setItem('highestRunPlayer2', highestRunPlayer2);
    localStorage.setItem('timeoutsPlayer1', timeoutsPlayer1);
    localStorage.setItem('timeoutsPlayer2', timeoutsPlayer2);
    localStorage.setItem('pointsPlayer1', pointsPlayer1);
    localStorage.setItem('pointsPlayer2', pointsPlayer2);
    localStorage.setItem('runPlayer1', runPlayer1);
    localStorage.setItem('runPlayer2', runPlayer2);


    var status = "newGame";
    localStorage.setItem('status', status);

};

function caromScoreNewGame () {

    newGame();
    getNumPlayers();

    if (document.getElementById("lblNumPlayers").innerHTML == "2Players") {window.location.href = "https://carom-score-994rtoh77-pafipas-projects.vercel.app//CaromScore2p.html"}
    else if (document.getElementById("lblNumPlayers").innerHTML == "3Players") {}
    else if (document.getElementById("lblNumPlayers").innerHTML == "3Players") {}
    
}


