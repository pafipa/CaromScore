document.getElementById('lblNamePlayer1').textContent = localStorage.getItem('nameHcpPlayer1');
document.getElementById('lblNamePlayer2').textContent = localStorage.getItem('nameHcpPlayer2');

document.getElementById('imgBallPlayer1').src = localStorage.getItem('Ball1');
document.getElementById('imgBallPlayer2').src = localStorage.getItem('Ball2');

document.getElementById('lblSecondsRemaining').textContent = localStorage.getItem('shottime');

if (localStorage.getItem('hcpPlayer1')==""){
    document.getElementById('lblRunTo').innerHTML = "run to " + localStorage.getItem('runTo')}
    else {document.getElementById('lblRunTo').innerHTML = "HCP"};

document.getElementById('lblMaxInnings').innerHTML = "max. innings " + localStorage.getItem('maxInnings');


let pointsPlayer1 = 0; localStorage.setItem('pointsPlayer1', pointsPlayer1);
let pointsPlayer2 = 0; localStorage.setItem('pointsPlayer2', pointsPlayer2);
let runPlayer1 = 0; localStorage.setItem('runPlayer1', runPlayer1);
let runPlayer2 = 0; localStorage.setItem('runPlayer2', runPlayer2);
let inningsPlayer1 = 0; localStorage.setItem('inningsPlayer1', inningsPlayer1);
let inningsPlayer2 = 0; localStorage.setItem('inningsPlayer2', inningsPlayer2);
let highestRunPlayer1 = 0; localStorage.setItem('highestRunPlayer1', highestRunPlayer1);
let highestRunPlayer2 = 0; localStorage.setItem('highestRunPlayer2', highestRunPlayer2);
var turnOfPlayer = 1; localStorage.setItem('turnOfPlayer', turnOfPlayer);

document.getElementById('lblInnings').textContent = localStorage.getItem('innings');
document.getElementById('lblInningsPlayer1').textContent = localStorage.getItem('inningsPlayer1');
document.getElementById('lblInningsPlayer2').textContent = localStorage.getItem('inningsPlayer2');
document.getElementById('lblHighestRunPlayer1').textContent = localStorage.getItem('highestRunPlayer1');
document.getElementById('lblHighestRunPlayer2').textContent = localStorage.getItem('highestRunPlayer2');
document.getElementById('lblTimeoutsPlayer1').innerHTML = localStorage.getItem('timeoutsPlayer1');
document.getElementById('lblTimeoutsPlayer2').innerHTML = localStorage.getItem('timeoutsPlayer2');
document.getElementById('lblPointsPlayer1').textContent = pointsPlayer1;
document.getElementById('lblPointsPlayer2').textContent = pointsPlayer2;
document.getElementById('lblRunPlayer1').textContent = localStorage.getItem('runPlayer1');
document.getElementById('lblRunPlayer2').textContent = localStorage.getItem('runPlayer2');


// Swap player names
document.getElementById('btnChangePlayers').addEventListener('click', function() {
    
    var temp = localStorage.getItem('nameHcpPlayer1');
    localStorage.setItem('nameHcpPlayer1', localStorage.getItem('nameHcpPlayer2'));
    localStorage.setItem('nameHcpPlayer2', temp);

    document.getElementById('lblNamePlayer1').textContent = localStorage.getItem('nameHcpPlayer1');
    document.getElementById('lblNamePlayer2').textContent = localStorage.getItem('nameHcpPlayer2');



});

// Swap balls
document.getElementById('imgBallPlayer1').addEventListener('click', function() {
    
    var tempBall = localStorage.getItem('Ball1');
    localStorage.setItem('Ball1', localStorage.getItem('Ball2'));
    localStorage.setItem('Ball2', tempBall);

    document.getElementById('imgBallPlayer1').src = localStorage.getItem('Ball1');
    document.getElementById('imgBallPlayer2').src = localStorage.getItem('Ball2');

});




function upgradeAveragePlayer1(){
    var averagePlayer1 = 0;
    if(localStorage.getItem('inningsPlayer1')!=0) {averagePlayer1 = localStorage.getItem('pointsPlayer1') / localStorage.getItem('inningsPlayer1')};
    localStorage.setItem('averagePlayer1', averagePlayer1.toFixed(3));
    document.getElementById('lblAveragePlayer1').textContent = localStorage.getItem('averagePlayer1');
}

function upgradeAveragePlayer2(){
    var averagePlayer2 = 0;
    if(localStorage.getItem('inningsPlayer2')!=0) {averagePlayer2 = localStorage.getItem('pointsPlayer2') / localStorage.getItem('inningsPlayer2')};
    localStorage.setItem('averagePlayer2', averagePlayer2.toFixed(3));
    document.getElementById('lblAveragePlayer2').textContent = localStorage.getItem('averagePlayer2');
}



function onLoadCaromScore2P(){

    if (localStorage.getItem('status')=="newGame") {
        document.getElementById('btnStop').style.display = 'none';
        document.getElementById('btnEdit').style.display = 'none';
        document.getElementById('btnStopEdit').style.display = 'none';
        document.getElementById('btnResume').style.display = 'none';
        document.getElementById('btnPause').style.display = 'none';
        document.getElementById('btnTimeout').style.display = 'none';
        document.getElementById('btnIncreasePoints1').style.display = 'none';
        document.getElementById('btnDecreasePoints1').style.display = 'none';
        document.getElementById('btnIncreasePoints2').style.display = 'none';
        document.getElementById('btnDecreasePoints2').style.display = 'none';
        document.getElementById('btnIncreaseInnings').style.display = 'none';
        document.getElementById('btnDecreaseInnings').style.display = 'none';
        document.getElementById('lblRunPlayer1').style.display = 'none';
        document.getElementById('lblRunPlayer2').style.display = 'none';
        document.getElementById('lblInningsPlayer1').style.display = 'none';
        document.getElementById('lblInningsPlayer2').style.display = 'none';
        document.getElementById('imgCaromScore2P').style.display = 'none';
        document.getElementById('cont10').style.pointerEvents = "none";
        document.getElementById('cont20').style.pointerEvents = "none";
    }
}

function redirectToCaromScore() {
    
    if (confirm("Are you sure to exit?")) {
        window.location.href = 'index.html';
    } else {
        txt = "You pressed Cancel!";
    }
}

function startMatch() {
    let status = "startedGame";
    localStorage.setItem('status', status);
    
    document.getElementById('btnStartMatch').style.display = 'none';
    document.getElementById('btnChangePlayers').style.display='none';
    document.getElementById('imgCaromScore2P').style.display='block';
    document.getElementById('btnPause').style.display='block';
    document.getElementById('btnTimeout').style.display='block';
    document.getElementById('btnEdit').style.display='block';
    document.getElementById('lblAveragePlayer1').textContent = "0.000";
    document.getElementById('lblAveragePlayer2').textContent = "0.000";
    document.getElementById('cont10').style.pointerEvents = "auto";
    document.getElementById('cont20').style.pointerEvents = "auto";

    let turn = 0;
    localStorage.setItem('turn', turn);

    document.getElementById('imgBallPlayer1').style.pointerEvents = "none";
    document.getElementById('imgBallPlayer2').style.pointerEvents = "none";

    turnPlayer1();
    startTimer();
}

function turnPlayer1(){
    let turn = localStorage.getItem('turn');
    
        if(turn == 1){
            increasePoints1();
            restartTimer();
        } else {
            document.getElementById('imgBallPlayer1').style.display = 'block';
            document.getElementById('lblRunPlayer1').style.display = 'block';
            document.getElementById('imgBallPlayer2').style.display = 'none';
            document.getElementById('lblRunPlayer2').style.display = 'none';
            turn = 1;
            localStorage.setItem('turn', turn);
            runPlayer1 = 0;
            localStorage.setItem('runPlayer1',runPlayer1);
            document.getElementById('lblRunPlayer1').textContent = runPlayer1;
            inningsPlayer1 = inningsPlayer1 + 1;
            localStorage.setItem('inningsPlayer1',inningsPlayer1);
            document.getElementById('lblInningsPlayer1').textContent = inningsPlayer1;
            document.getElementById('lblInnings').textContent = inningsPlayer1;
    
            restartTimer();
    
            if(runPlayer2 > highestRunPlayer2){
                highestRunPlayer2 = runPlayer2;
                document.getElementById('lblHighestRunPlayer2').textContent = highestRunPlayer2;
            }
        }
}

function turnPlayer2(){
    let turn = localStorage.getItem('turn');
        
    if(turn == 2){
        increasePoints2();
        restartTimer();
    } else {
        document.getElementById('imgBallPlayer2').style.display = 'block';
        document.getElementById('lblRunPlayer2').style.display = 'block';
        document.getElementById('imgBallPlayer1').style.display = 'none';
        document.getElementById('lblRunPlayer1').style.display = 'none';

        turn = 2;
        localStorage.setItem('turn', turn);
        runPlayer2 = 0;
        localStorage.setItem('runPlayer2',runPlayer2);
        document.getElementById('lblRunPlayer2').textContent = runPlayer2;
        inningsPlayer2 = inningsPlayer2 + 1;
        localStorage.setItem('inningsPlayer2',inningsPlayer2);
        document.getElementById('lblInningsPlayer2').textContent = inningsPlayer2;

        restartTimer();

        if(runPlayer1 > highestRunPlayer1){
            highestRunPlayer1 = runPlayer1;
            document.getElementById('lblHighestRunPlayer1').textContent = highestRunPlayer1;
        }
    }
}


function increasePoints1(){
    pointsPlayer1 = pointsPlayer1 + 1;
    localStorage.setItem('pointPlayer1', pointsPlayer1);
    document.getElementById('lblPointsPlayer1').textContent = pointsPlayer1;
    runPlayer1 = runPlayer1 +1;
    localStorage.setItem('runPlayer1',runPlayer1);
    document.getElementById('lblRunPlayer1').textContent = runPlayer1;
    
}

function increasePoints2(){
    pointsPlayer2 = pointsPlayer2 + 1;
    localStorage.setItem('pointPlayer2', pointsPlayer2);
    document.getElementById('lblPointsPlayer2').textContent = pointsPlayer2;
    runPlayer2 = runPlayer2 +1;
    localStorage.setItem('runPlayer2',runPlayer2);
    document.getElementById('lblRunPlayer2').textContent = runPlayer2;

}

function decreasePoints1() {
    pointsPlayer1 = pointsPlayer1 - 1;
    localStorage.setItem('pointPlayer1', pointsPlayer1);
    document.getElementById('lblPointsPlayer1').textContent = pointsPlayer1;
    if (runPlayer1 > 0){
        runPlayer1 = runPlayer1 - 1;
        localStorage.setItem('runPlayer1',runPlayer1);
        document.getElementById('lblRunPlayer1').textContent = runPlayer1;
    }    
}

function decreasePoints2() {
    pointsPlayer2 = pointsPlayer2 - 1;
    localStorage.setItem('pointPlayer2', pointsPlayer2);
    document.getElementById('lblPointsPlayer2').textContent = pointsPlayer2;
    if (runPlayer2 > 0){
        runPlayer2 = runPlayer2 - 1;
        localStorage.setItem('runPlayer2',runPlayer2);
        document.getElementById('lblRunPlayer2').textContent = runPlayer2;
    }    
}

function increaseInnings() {
    inningsPlayer1 ++;
    inningsPlayer2 ++;
    localStorage.setItem('inningsPlayer1',inningsPlayer1);
    localStorage.setItem('inningsPlayer2',inningsPlayer2);
    document.getElementById('lblInnings').textContent = inningsPlayer1;
    document.getElementById('lblInningsPlayer1').textContent = inningsPlayer1;
    document.getElementById('lblInningsPlayer2').textContent = inningsPlayer2;
}

function decreaseInnings() {
    inningsPlayer1 --;
    inningsPlayer2 --;
    localStorage.setItem('inningsPlayer1',inningsPlayer1);
    localStorage.setItem('inningsPlayer2',inningsPlayer2);
    document.getElementById('lblInnings').textContent = inningsPlayer1;
    document.getElementById('lblInningsPlayer1').textContent = inningsPlayer1;
    document.getElementById('lblInningsPlayer2').textContent = inningsPlayer2;
}

function averagePlayer1() {
    document.getElementById('lblAveragePlayer1').textContent = (pointsPlayer1 / inningsPlayer1).toFixed(3)
}
function averagePlayer2() {
    document.getElementById('lblAveragePlayer2').textContent = (pointsPlayer2 / inningsPlayer2).toFixed(3)
}

function editOn() {
    document.getElementById('btnIncreasePoints1').style.display = 'block';
    document.getElementById('btnDecreasePoints1').style.display = 'block';
    document.getElementById('btnIncreasePoints2').style.display = 'block';
    document.getElementById('btnDecreasePoints2').style.display = 'block';
    document.getElementById('btnIncreaseInnings').style.display = 'block';
    document.getElementById('btnDecreaseInnings').style.display = 'block';
    document.getElementById('lblInningsPlayer1').style.display = 'block';
    document.getElementById('lblInningsPlayer2').style.display = 'block';
    document.getElementById('btnEdit').style.display = 'none';
    document.getElementById('btnStopEdit').style.display = 'none';
    document.getElementById('btnPause').style.display = 'none';
    document.getElementById('btnResume').style.display = 'block';
    document.getElementById('btnTimeout').style.display = 'none';
    document.getElementById('btnBack').style.display = 'none';
    pauseTimer();
}

function editOff() {
    document.getElementById('btnIncreasePoints1').style.display = 'none';
    document.getElementById('btnDecreasePoints1').style.display = 'none';
    document.getElementById('btnIncreasePoints2').style.display = 'none';
    document.getElementById('btnDecreasePoints2').style.display = 'none';
    document.getElementById('btnIncreaseInnings').style.display = 'none';
    document.getElementById('btnDecreaseInnings').style.display = 'none';
    document.getElementById('lblInningsPlayer1').style.display = 'none';
    document.getElementById('lblInningsPlayer2').style.display = 'none';
    document.getElementById('btnEdit').style.display = 'block';
    document.getElementById('btnStopEdit').style.display = 'none';
    document.getElementById('btnPause').style.display = 'block';
    document.getElementById('btnTimeout').style.display = 'block';
    document.getElementById('btnBack').style.display = 'block';
    resumeTimer();
}

function pauseMatch(){
    document.getElementById('btnPause').style.display = 'none';
    document.getElementById('btnTimeout').style.display = 'none';
    document.getElementById('btnResume').style.display = 'block';
    pauseTimer();
}

function resumeMatch(){
    document.getElementById('btnResume').style.display = 'none';

    document.getElementById('btnIncreasePoints1').style.display = 'none';
    document.getElementById('btnDecreasePoints1').style.display = 'none';
    document.getElementById('btnIncreasePoints2').style.display = 'none';
    document.getElementById('btnDecreasePoints2').style.display = 'none';
    document.getElementById('btnIncreaseInnings').style.display = 'none';
    document.getElementById('btnDecreaseInnings').style.display = 'none';
    document.getElementById('lblInningsPlayer1').style.display = 'none';
    document.getElementById('lblInningsPlayer2').style.display = 'none';
    document.getElementById('btnEdit').style.display = 'block';
    document.getElementById('btnStopEdit').style.display = 'none';
    document.getElementById('btnPause').style.display = 'block';
    document.getElementById('btnTimeout').style.display = 'block';
    document.getElementById('btnBack').style.display = 'block';

    resumeTimer();
}



//TIMER

const shottime = localStorage.getItem('shottime');
const progressBar = document.querySelector('.progressBar');
const secondsRemaining = document.querySelector('#lblSecondsRemaining');
const timeoutBtn = document.querySelector('#btnTimeout');

let interval;
let timeRemaining = shottime.value;

progressBar.style.width = '0%';

btnStartMatch.addEventListener('click', () => {
    if (interval) clearInterval(interval);
    timeRemaining = localStorage.getItem('shottime');
    updateSecondsRemaining();
    interval = setInterval(increaseBar, 1000);
});



lblSecondsRemaining.addEventListener('click', () => {
    restartTimer();
});

timeoutBtn.addEventListener('click', () => {
    let turn = localStorage.getItem('turn');
    let timeoutsPlayer1 = localStorage.getItem('timeoutsPlayer1');
    let timeoutsPlayer2 = localStorage.getItem('timeoutsPlayer2');

    if(turn == 1){
        
        if(timeoutsPlayer1 > 0){
            timeRemaining += parseInt(localStorage.getItem('shottime'));
            progressBar.style.width = '0%';
            updateSecondsRemaining();
            increaseBar();

            timeoutsPlayer1--;
            localStorage.setItem('timeoutsPlayer1', timeoutsPlayer1);
            document.getElementById('lblTimeoutsPlayer1').innerHTML = localStorage.getItem('timeoutsPlayer1');
        }
        
    } else if(turn == 2){
        if(timeoutsPlayer2 > 0){

            timeRemaining += parseInt(localStorage.getItem('shottime'));
            progressBar.style.width = '0%';
            updateSecondsRemaining();
            increaseBar();

            timeoutsPlayer2--;
            localStorage.setItem('timeoutsPlayer2', timeoutsPlayer2);
            document.getElementById('lblTimeoutsPlayer2').innerHTML = localStorage.getItem('timeoutsPlayer2');
        }
    }
});

function increaseBar() {
    timeRemaining--;
    updateSecondsRemaining();
    const porcentaje = (timeRemaining / (localStorage.getItem('shottime'))) * 100;
    progressBar.style.width = `${100-porcentaje}%`;
    if (timeRemaining <= 0) {
        clearInterval(interval);
    }
}

function updateSecondsRemaining() {
    secondsRemaining.textContent = timeRemaining;
}

function restartTimer(){
    clearInterval(interval);
    timeRemaining = localStorage.getItem('shottime');
    updateSecondsRemaining();
    progressBar.style.width = '0%';
    interval = setInterval(increaseBar, 1000);
}

function pauseTimer(){
    clearInterval(interval);
    document.getElementById('cont10').style.pointerEvents = "none";
    document.getElementById('cont20').style.pointerEvents = "none";
}

function resumeTimer(){
    interval = setInterval(increaseBar, 1000);
    document.getElementById('cont10').style.pointerEvents = "auto";
    document.getElementById('cont20').style.pointerEvents = "auto";
}

//SHORTCUTS

function addPoint() {
    let turn = localStorage.getItem('turn');

    if (turn == 1){
        increasePoints1();
        averagePlayer1();
    } else if (turn == 2){
        increasePoints2();
        averagePlayer2();
    }
}

function addPointShortcut(event) {
    if (event.key === " ") {
        addPoint();
        restartTimer();
    }
}
document.addEventListener("keydown", addPointShortcut);









//TODO solo gira una vez
function rotateBall1() {
    var myImage = document.getElementById("imgBallPlayer1");
    myImage.style.transform = 'rotate(360deg)';
    myImage.style.transitionDuration = '2s'  ;
}






















