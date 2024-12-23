const playButton = document.querySelector('#playButton');
const container1 = document.querySelector('#container-1');
const container2 = document.querySelector('#container-2');
const containerConfig = document.querySelector('#container-config');
const containerGameOver = document.querySelector('#container-game-over');
const containerGameOverH1 = document.querySelector('#container-game-over h1');
const containerUsername = document.querySelector('#container-username');
const body = document.querySelector('body');
const inputes = document.querySelectorAll('.progresion input');
const progresion = document.querySelectorAll('.progresion');
const hearts = document.querySelectorAll('.heart');
const heartsDiv = document.querySelector('#heart-div');
const h4points = document.querySelector('header h4');
const listenButton = document.querySelector('#listen');
const bonusInput = document.querySelector('#bonusInput');
const configH4 = document.querySelectorAll('#config-div-2 h4');
const usernameH4 = document.querySelector('#container-config header div h4');
const levelH4 = document.querySelector('#level-div h4');
const totalPointsH4 = document.querySelectorAll('#config-div-3 h4')[0];
const maxPointsH4 = document.querySelectorAll('#config-div-3 h4')[1];
const usernameDiv = document.querySelector('#username');
const loginDiv = document.querySelector('#username-div-login');
const cadastroDiv = document.querySelector('#username-div-cadastro');
const inputesCadastro = document.querySelectorAll(".body-username label input"); //input[type=User123]

const audio = document.querySelector('#Chord');


const notas = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const formulaEscala = [2, 2, 1, 2, 2, 2, 1];
const formulaCampoHarmonico = ['', 'm', 'm', '', '', 'm', 'º'];
const formulaInversao = [1, 1, 1, 2, 2, 3];
let tonic_scale = [];
let tonic_campoHarmonico = [];

let verifySequence = [1];
let toBeVerified = ['I'];
let listenActivated = false;
let verifyActivated = false;
let acertosSeguidos = 0;

let dificuldade = 'medium';
let heartsOn = 'on';
let username = 'User123';
let level = 0;
let contadorLevel = 1;

let lifes = 10;
let points = 0;
let totalPoints = 0;
let maxPoints = 0;

let consultor = 0;

usernameH4.innerHTML = 'Usuário: '  + username.toLowerCase();

//play();
//config();

console.log(    ); //Math.max(10, 20 ,50)

configH4.forEach((configh4, index) => {
    configh4.addEventListener('click', () => {
        if (configh4.innerHTML == 'EASY') {
            configh4.innerHTML = 'MEDIUM';
            dificuldade = 'medium';
            console.log(dificuldade);
        } else if (configh4.innerHTML == 'MEDIUM') {
            configh4.innerHTML = 'HARD';
            dificuldade = 'hard';
            console.log(dificuldade);
        } else if (configh4.innerHTML == 'HARD') {
            configh4.innerHTML = 'IMPOSSIBLE';
            dificuldade = 'impossible';
            console.log(dificuldade);
        } else if (configh4.innerHTML == 'IMPOSSIBLE') {
            configh4.innerHTML = 'EASY';
            dificuldade = 'easy';
            console.log(dificuldade);
        }

        if (configh4.innerHTML == 'ON') {
            configh4.innerHTML = 'OFF';
            heartsOn = 'off';
            console.log(heartsOn);
        } else if (configh4.innerHTML == 'OFF') {
            configh4.innerHTML = 'ON';
            heartsOn = 'on';
            console.log(heartsOn);
        }
    })
});

function config() {

    container1.style.opacity = 0;
    container1.style.display = 'none';

    containerConfig.style.display = 'flex';
    containerConfig.style.opacity = 1;
    
    body.style.background = '#121212';

    totalPointsH4.innerHTML = 'Total Points: ' + totalPoints
    maxPointsH4.innerHTML = 'Max Points: ' + maxPoints;
}

function calcTonic_scale() {

    if (dificuldade == 'easy') {
        tonic_scale = [notas[0]];
    } else if (dificuldade == 'medium' || dificuldade == 'hard' || dificuldade == 'impossible') {
        tonic_scale = [notas[Math.floor(Math.random() * 12)]];
    }


    if (tonic_scale.length == 1) {
        
        for (let i = 0; i < notas.length; i++) {
            if (notas[i] == tonic_scale[0]) {
                consultor = i;
                break;
            }
        }
    
        for (let i = 0; i < formulaEscala.length; i++) {
            consultor+=formulaEscala[i];
            tonic_scale.push(notas[consultor]);
        }
        console.log(tonic_scale);
    }
    
}

function calcCampoHarmonico() {
    
    calcTonic_scale();
    
    
    for (let i = 0; i < formulaCampoHarmonico.length-1; i++) {
        tonic_campoHarmonico[i] = tonic_scale[i];
        tonic_campoHarmonico[i] = tonic_campoHarmonico[i] + formulaCampoHarmonico[i];
        if (dificuldade == 'easy' || dificuldade == 'medium') {
            tonic_campoHarmonico[i] = tonic_campoHarmonico[i] + '1';
        } else if (dificuldade == 'hard') {
            tonic_campoHarmonico[i] = tonic_campoHarmonico[i] + formulaInversao[i];
        } else if (dificuldade == 'impossible') {
            console.log(tonic_scale);
            tonic_campoHarmonico[i] = tonic_campoHarmonico[i] + (Math.floor(Math.random() * 3)+1);
        }
    }
    console.log(tonic_campoHarmonico);
}

function play() {

    container1.style.opacity = 0;
    container1.style.display = 'none';

    container2.style.display = 'flex';
    container2.style.opacity = 1;

    body.style.background = '#121212';

    if (heartsOn == 'off') {
        heartsDiv.style.opacity = 0;
    } else if (heartsOn == 'on') {
        heartsDiv.style.opacity = 1;
    }
}

function back() {
    container2.style.opacity = 0;
    container2.style.display = 'none';
    containerConfig.style.opacity = 0;
    containerConfig.style.display = 'none';

    container1.style.display = 'flex';
    container1.style.opacity = 1;
    body.style.background = '';
}

function listen() {

    calcCampoHarmonico();

    if (listenActivated) {
        
        for (let i = 0; i < 4; i++) {
            if (i !== 3) {inputes[i].value = "";}
            progresion[i].style.border = "2px white outset";
            bonusInput.style.borderColor = "orange";
            bonusInput.value = "";
        }
        
        listenActivated = false;
        return listen();
                

    } else {
        listenActivated = true;
        verifyActivated = false;
        let listenButtonOnClick = listenButton.onclick;
        listenButton.onclick = '';
        verifySequence = [1];
        
        audio.src = 'music/' + tonic_campoHarmonico[0] + '.mp3';
        audio.play();
    
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                let random6 = Math.floor(Math.random() * 6);
                audio.src = 'music/' + tonic_campoHarmonico[random6] + '.mp3';
                audio.play();
                verifySequence.push(random6+1);
                console.log(verifySequence);
                console.log(tonic_campoHarmonico[random6]);

                if (i==3) {listenButton.onclick = listenButtonOnClick;}
            }, 3000 * i);
        }
        
    }

}
function repeat() {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            audio.src = 'music/' + tonic_campoHarmonico[verifySequence[i]-1] + '.mp3';
            audio.play();
        }, 3000 * i);
    }
}

function verify() {

    if (verifyActivated == false) {

        verifyActivated = true;

        toBeVerified = ['I'];
    
        inputes.forEach(inputes => {
            toBeVerified.push(inputes.value);
        });
    
        translatorProgresion();    
    
        let acertosPorPartida = 0;
    
        for (let i = 0; i < 4; i++) {
            if (verifySequence[i] == toBeVerified[i]) {
                progresion[i].style.border = '5px green outset';
    
                points+=10;
                acertosPorPartida++;
    
            } else {
                progresion[i].style.border = '5px red outset';
                inputes[i-1].value = verifySequence[i];
                if (heartsOn == 'on') {
                    lifes--;
                }
                
            }
        }
    
        if (bonusInput.value === tonic_scale[0]) {
            points+=100;
            bonusInput.style.borderColor = 'green';
        } else {
            bonusInput.style.borderColor = 'red';
        }

        calcHearts();

        switch (acertosPorPartida) {
            case 4:
                acertosSeguidos++;
                if (acertosSeguidos == 1) {
                    points+=100;
                } else {
                    points+=(100+(100*acertosSeguidos/10));
                }
                break;
            case 3:
                points+=50;
                break;
            case 2:
                points+=25;
                break;
        
            default:
                break;
        }
    }
    h4points.innerHTML = 'Points: ' + points;
    totalPoints += points;
    maxPoints = Math.max(maxPoints, points);
    //calcLevel();
}

function translatorProgresion() {

    for (let i = 0; i < 4; i++) {
        switch (verifySequence[i]) {
            case 1:
                verifySequence[i] = 'I'
                break;
            case 2:
                verifySequence[i] = 'ii'
                break;
            case 3:
                verifySequence[i] = 'iii'
                break;
            case 4:
                verifySequence[i] = 'IV'
                break;
            case 5:
                verifySequence[i] = 'V'
                break;
            case 6:
                verifySequence[i] = 'vi'
                break;
        
            default:
                break;
        }
    }
}

function calcHearts() {

    switch (lifes) {
        case 10:
            hearts[0].src = 'img/heart.png';
            hearts[1].src = 'img/heart.png';
            hearts[2].src = 'img/heart.png';
            hearts[3].src = 'img/heart.png';
            hearts[4].src = 'img/heart.png';
            break;
        case 9:
            hearts[0].src = 'img/half_heart.png';
            break;
        case 8:
            hearts[0].src = 'img/empty_heart.png';
            break;
        case 7:
            hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/half_heart.png';
            break;
        case 6:
            hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/empty_heart.png';
            break;
            case 5:
                hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/empty_heart.png';
            hearts[2].src = 'img/half_heart.png';
            break;
            case 4:
            hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/empty_heart.png';
            hearts[2].src = 'img/empty_heart.png';
            break;
            case 3:
                hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/empty_heart.png';
            hearts[2].src = 'img/empty_heart.png';
            hearts[3].src = 'img/half_heart.png';
            break;
        case 2:
            hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/empty_heart.png';
            hearts[2].src = 'img/empty_heart.png';
            hearts[3].src = 'img/empty_heart.png';
            break;
        case 1:
                hearts[0].src = 'img/empty_heart.png';
            hearts[1].src = 'img/empty_heart.png';
            hearts[2].src = 'img/empty_heart.png';
            hearts[3].src = 'img/empty_heart.png';
            hearts[4].src = 'img/half_heart.png';
            break;
        default:
            gameOver(); 
            break;
    }
}

function gameOver() {
    hearts[0].src = 'img/empty_heart.png';
    hearts[1].src = 'img/empty_heart.png';
    hearts[2].src = 'img/empty_heart.png';
    hearts[3].src = 'img/empty_heart.png';
    hearts[4].src = 'img/empty_heart.png';

    containerGameOver.style.display = 'flex';
    containerGameOver.style.opacity = 1;

    audio.src = 'music/0game-over.mp3';
    audio.play();
}

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        return verify();
    }

    
})

containerGameOverH1.addEventListener('click', () => {
    containerGameOver.style.opacity = 0;
    containerGameOver.style.display = 'none';

    points = 0;
    lifes = 10;
    h4points.innerHTML = 'Points: ' + points;

    for (let i = 0; i < 4; i++) {
        if (i !== 3) {inputes[i].value = "";}
        progresion[i].style.border = "2px white outset";
        bonusInput.style.borderColor = "orange";
        bonusInput.value = "";
    }
    
    listenActivated = false;

    calcHearts();
})

function calcLevel() {
    for (let i = 1; i < points/500; i++) {
        if (points > i*100*contadorLevel) {
            level++;
            audio.src = 'music/0level-up.mp3';
            audio.play();
            contadorLevel+=0.1;
            console.log(contadorLevel);
            levelH4.innerHTML = 'Level: ' + level;
        }
    }
}

function loadCadastro() {
    containerUsername.style.display = 'flex';
    loginDiv.style.display = 'none';
    cadastroDiv.style.display = 'flex';
}

function loadLogin() {
    containerUsername.style.display = 'flex';
    loginDiv.style.display = 'flex';
    cadastroDiv.style.display = 'none';
}

function addUsername() {
    console.log(inputesCadastro[0].value);
    username = inputesCadastro[0].value;
    console.log(username);
    usernameH4.innerHTML = 'Usuário: '  + username.toLowerCase();

    loginDiv.style.display = 'none';
    containerUsername.style.display = 'none';
    if (username == '') {
        usernameH4.innerHTML = 'Usuário: user123';
    }
}

progresion.forEach((progresion, index) => {
    progresion.addEventListener('click', (e) => {

        audio.src = 'music/' + tonic_campoHarmonico[verifySequence[index]-1] + '.mp3';
        audio.play();
        
        console.log(tonic_campoHarmonico[verifySequence[index]-1]);
    })
})



















