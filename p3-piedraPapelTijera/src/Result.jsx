import styled from "styled-components"

const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p{
    font-size: 1.5rem;
    /* margin: 0.5rem 0; */
    font-weight: bold;
  }

  & button{
    padding: 1rem;
    background-color: yellow;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1rem;
    border: none;
  }
`

//Componente que determina que muestra el resultado del round
export default function Result({result, OPTIONS, userChoice, computerChoice, reset, round}){
  return (
        <>
            {result !== null && (
            <DivResult>
              {result === 0 && <p>Empate</p>}

              {result === 1 && (
                <p>Ganaste con {OPTIONS[userChoice].name} contra {OPTIONS[computerChoice].name}
                </p>
              )}

              {result === 2 && (
                <p>Perdiste con {OPTIONS[userChoice].name} contra {OPTIONS[computerChoice].name}
                </p>
              )}
              
              {round<5 && (
                <button
                onClick={reset}>
                  Volver a jugar
              </button>
              )}  
            </DivResult>
          )}
        </>
    )
}