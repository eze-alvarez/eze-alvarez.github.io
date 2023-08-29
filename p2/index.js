// -------- jugada player 1
const jugadaPlayer = [
    {
        jugada : "piedra",
        url:  "./img/piedra-izq.png",
        alt: "mano piedra izquierda"
    },
    {
        jugada : "papel",
        url:"./img/papel-izq.png",
        alt :"mano papel izquierda"
    },
    {
        jugada :"tijera",
        url:"./img/tijera-izq.png",
        alt :"mano tijera izquierda"
    }
]
const jugadaCompu = [
    {
        jugada : "piedra",
        url:  "./img/piedra-der.png",
        alt: "mano piedra derecha"
    },
    {
        jugada : "papel",
        url:"./img/papel-der.png",
        alt :"mano papel derecha"
    },
    {
        jugada :"tijera",
        url:"./img/tijera-der.png",
        alt :"mano tijera derecha"
    }
]

let piedra = document.querySelector(".piedra")
let papel = document.querySelector(".papel")
let tijera = document.querySelector(".tijera")
let play = document.querySelector(".btn-play")
let buttonsPlayer = document.querySelectorAll(".buttonsPlay")




// --------- escogiendo numero de Rounds
let currentRoundNumber = 1;
let numberOfRounds;
let namePlayer;
let maximoJugadas = numberOfRounds;
let ganadosCompu = 0;
let ganadosUsuario = 0;
let empate = 0;

let buttonsRounds = document.querySelectorAll(".btn-round")
buttonsRounds.forEach(round => round.addEventListener("click", roundsNumber))

function roundsNumber(){
    numberOfRounds =  this.id
    
    // addScore(numberOfRounds)
}

// --------- escogiendo nombre de jugador
let inputNombreJugador = document.querySelector(".namePlayerInput")
inputNombreJugador.addEventListener("change", nombreJugador);

function nombreJugador() {
    namePlayer = this.value
}

function addScore(rounds){
    let sectorPuntaje = document.querySelector(".puntaje")
    let sectorPuntajeCompu = document.querySelector(".puntaje-compu")
    let numero = 0
    let idNumber = 1

    while (numero < rounds){
        let round = document.createElement("div")
        round.className = "punto"
        round.id = `playerScore${idNumber}`
        sectorPuntaje.appendChild(round)

        let roundCompu = document.createElement("div")
        roundCompu.className = "punto"
        roundCompu.id = `compuScore${idNumber}`
        sectorPuntajeCompu.appendChild(roundCompu)

        numero++
        idNumber++
    }
}

function pintScore(numero, ganador){
    let targetScorePlayer = `#playerScore${numero}`;
    let roundScorePlayer = document.querySelector(targetScorePlayer);
    let targetScoreCompu = `#compuScore${numero}`;
    let roundScoreCompu = document.querySelector(targetScoreCompu);

    if(ganador == "usuario gano" ){
        roundScorePlayer.className = "punto puntoGanado"
        roundScoreCompu.className = "punto puntoPerdido"
    }else if(ganador == "empate"){
        roundScorePlayer.className = "punto puntoEmpate"
        roundScoreCompu.className = "punto puntoEmpate"
    }else{
        roundScorePlayer.className = "punto puntoPerdido"
        roundScoreCompu.className = "punto puntoGanado"
    }
}

// --------OPCIONES del juego
play.addEventListener("click",letsPlay)

function letsPlay(){
    if(!numberOfRounds){
        let mensaje = document.querySelector(".mensajeRoundIncompleto")
        mensaje.innerHTML = "*Seleccionar número de rouds"
        return
    }

    let player1 = document.querySelector(".playerName1")
    player1.innerHTML = namePlayer? namePlayer : "jugador 1"

    let playerCompu = document.querySelector(".compuName") 
    playerCompu.innerHTML = "Computadora"

    addScore(numberOfRounds)

    let welcomeWindow = document.querySelector(".rounds-window")
    welcomeWindow.style.display = "none"

    inputNombreJugador.value = ""

    buttonsPlayer.forEach(button => button.addEventListener("click", round))
}



// buttonsPlayer.forEach(button => button.addEventListener("click", obtenerJugadaPlayer))
function obtenerJugadaPlayer(id){
    let buttonInfo = id
    let jugadaPlayerInfo = jugadaPlayer.filter(opcion => opcion.jugada == buttonInfo)[0]

    return jugadaPlayerInfo
}
function obtenerJugadaComputadora(){
    const numeroRandom = Math.floor(Math.random() * 3);
    const listaOpciones = ["piedra", "papel", "tijera"] 
    let handCompu = listaOpciones[numeroRandom]
    return jugadaCompu.filter(opcion => opcion.jugada == handCompu)[0]
}

function showHandPlayer(target,hand){
    // console.log(hand)
    let spaceImage = document.querySelector(target)
    spaceImage.innerHTML = `<img src=${hand.url} alt=${hand.alt}>`
}


function determinarGanador(compu,usuario){
    if(compu == "piedra"){
        switch(usuario){
            case "piedra":
                return "empate";
                break;
            case "papel":
                return "usuario gano";
                break;
            default:
                return "computadora gano";
                break;
        }
    }

    if(compu == "papel"){
        switch(usuario){
            case "piedra":
                return "computadora gano";
                break;
            case "papel":
                return "empate";
                break;
            default:
                return "usuario gano";
                break;
        }        
    }
    if(compu == "tijera"){
        switch(usuario){
            case "piedra":
                return "usuario gano";
                break;
            case "papel":
                return "computadora gano";
                break;
            default:
                return "empate";
                break;
        }
    }

}

function disabledButtonsPlayer(){
    buttonsPlayer.forEach(button => button.removeEventListener("click", round))
}

function round(){
    disabledButtonsPlayer()

    let playerHand = obtenerJugadaPlayer(this.id);
    let targetPlayer = ".sectorImagenPlayLeft"
    
    let compuHand = obtenerJugadaComputadora();
    let targetCompu = ".sectorImagenPlayRight"
    
    // console.log({playerHand}, {compuHand})
    showHandPlayer(targetPlayer, playerHand)
    showHandPlayer(targetCompu, compuHand)

    console.log(`
        player: ${playerHand.jugada}
        compu: ${compuHand.jugada}
        `)
    let ganador = determinarGanador(compuHand.jugada, playerHand.jugada);
    pintScore(currentRoundNumber, ganador)

    if(ganador == "computadora gano") ganadosCompu +=1
    if(ganador == "usuario gano") ganadosUsuario +=1
    if(ganador == "empate") empate +=1



    if(numberOfRounds==currentRoundNumber){
       verificarGanadorRonda()
       return
    }
    buttonsPlayer.forEach(button => button.addEventListener("click", round))
    currentRoundNumber++
   
}

function disabledButtonsPlayer(){
    buttonsPlayer.forEach(button => button.removeEventListener("click", round))
}

function verificarGanadorRonda(namePlayer="jugador 1"){
    let espacioResultado= document.querySelector(".ganador")
    espacioResultado.className = "ganador sectionGanador" 

    if(ganadosCompu>ganadosUsuario){
        espacioResultado.innerHTML = `
        <h2 class="mensajeGanador">RESULTADO</h2>
        <p> ${namePlayer} = ${ganadosUsuario} </br> computadora = ${ganadosCompu}</p>
        <h1>perdiste!</h1>`
    }else if(ganadosCompu<ganadosUsuario){
        espacioResultado.innerHTML = `
        <h2 class="mensajeGanador">RESULTADO</h2>
        <p> ${namePlayer} = ${ganadosUsuario} </br> computadora = ${ganadosCompu}</p>
        <h1>GANASTE !!!</h1>`
    }else{
        espacioResultado.innerHTML = `
        <h2 class="mensajeGanador">RESULTADO</h2>
        <p> ${namePlayer} = ${ganadosUsuario} </br> computadora = ${ganadosCompu}</p>
        <h1>empataste!</h1>`
    }
}







