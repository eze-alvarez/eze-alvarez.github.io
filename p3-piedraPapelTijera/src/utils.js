import piedra from './img/piedra-boton.png'
import papel from './img/papel-boton.png'
import tijera from './img/tijera-boton.png'

export const OPTIONS = [
    {id: 0, name: "piedra", image: piedra, beats: [2] },
    {id: 1, name: "papel", image: papel, beats: [0] },
    {id: 2, name: "tijera", image: tijera, beats: [1] }
  ]

export const getResult = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 0;
    }
  
    if(OPTIONS[userChoice].beats.includes(computerChoice)){
      return 1;
    }
  
    return 2; 
  }
