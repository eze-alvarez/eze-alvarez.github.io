import { useEffect, useState } from 'react';
import Result  from './Result';
import { OptionButton } from './OptionButton';
import { Marcador } from './Marcador';
import { OPTIONS, getResult } from './utils';
import { GanadorJuego } from './GanadorJuego';
import styled from 'styled-components';

const ContainerBoard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 2rem 0;
`
const LabelName = styled.label`
  & input{
    margin-left: 1rem;
  }
`
const TitleRound = styled.h1`
  text-align: center;
`

const DivMarcador = styled.div`
  display: flex;
  gap: 7rem;
`

const DivIconButtons = styled.div`
  background-color: #81c9d5;
  border-radius: 3rem;
  padding: 1rem;
`

const Message = styled.p`
  font-size: 1.3rem;
  margin: 0.3rem 0;
`

function App() {
  const [userName,setUserName] = useState('')
  const [userPoints,setUserPoints] = useState(0)
  const [computerPoints,setComputerPoints] = useState(0)
  const [empate,setEmpate] = useState(0)
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null)
  const [computerMessage, setComputerMessage] = useState(null)
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [round, setRound] = useState(0)
  const [finishGame, setFinishGame] = useState(false)

  //creacion del mensaje de eleccion del jugador
  useEffect(()=>{
    if(userChoice!==null){
      setUserMessage(`Has elegido ${OPTIONS[userChoice].name}`)
    }

  },[userChoice])

  //creacion del mensaje de eleccion de la computadora
  useEffect(()=>{
    if(computerChoice!==null){
      setComputerMessage(`La computadora ha elegido ${OPTIONS[computerChoice].name}`)
    }

  },[computerChoice])

  //funcion que se ejecuta para actualizar el puntaje
  useEffect(()=>{

    if(result === 0){
      setEmpate(empate + 1)
    }

    if(result === 1) setUserPoints(userPoints + 1)
    
    if(result===2)setComputerPoints(computerPoints + 1)
    
    
  },[result])

  //function para cambiar el nombre del jugador
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setUserName(e.target.value)
  }

  //funcion para 
  const handlePlay = (choice) =>{
    setRound(round + 1)  
    setUserChoice(choice);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 3);

    setTimeout(()=>setComputerChoice(randomChoice),1500);

    setTimeout(()=>{
      setResult(getResult(choice,randomChoice));
    },3000)
    if(round===4){
      setTimeout(()=> setFinishGame(true),5000)
    }

    clearTimeout()
  }

  //funcion para resetear cada round
  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false)
  }
  
  //funcion para resetear el juego entero y volver a jugar los 5 round
  const resetAllGame = () => {
    setUserName('');
    setUserChoice(null);
    setUserPoints(0);
    setComputerChoice(null);
    setComputerPoints(0)
    setEmpate(0);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
    setRound(0);
    setFinishGame(false);
  }

  return (
    <ContainerBoard>
      <LabelName>
        ingresa tu nombre aca
        <input type="text" value={userName} placeholder='ingresa tu nombre' onChange={handleInputChange}/>
      </LabelName>

      <TitleRound>Round {round} de 5 rounds</TitleRound>

      <DivMarcador>
        <Marcador
            userName={userName}
            userPoints={userPoints}
            computerPoints={computerPoints}
            empate={empate}
          />
      </DivMarcador>

      <DivIconButtons>
          {
            OPTIONS.map(option=>(
              <OptionButton
                 key={option.id}
                 disabled={disabled}
                 handlePlay={handlePlay}
                 option={option}
              />
            ))
          }
      </DivIconButtons>


   
          {userChoice !== null && (
            <Message>{userMessage}</Message>
          )}

          {computerChoice !== null && (
            <Message>{computerMessage}</Message>
          )}

          <Result 
            result={result}
            OPTIONS={OPTIONS}
            userChoice={userChoice} 
            computerChoice={computerChoice} 
            reset={reset}
            round={round}
          />
        
        {
          finishGame && (
            <GanadorJuego 
            userPoints={userPoints}
            computerPoints={computerPoints}
            resetAllGame={resetAllGame}
            finishGame={finishGame}
          />
          )
          
        }
    
    </ContainerBoard>
  );
}

export default App;