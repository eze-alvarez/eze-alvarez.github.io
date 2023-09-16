import styled from "styled-components"

const DivGanadorJuego = styled.div`
    padding: 1rem 2rem;
    background-color: #999f9d;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2{
        font-size: 2rem;
        font-weight: bold;
        margin: 0.5rem 0;
    }

    & button{
        padding: 1rem;
        border: none;
        background-color: #59d5c3;
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: bold;
    }
`
//en caso de no finalizar el juego no retorna nada, boton para reiniciar el JUEGO de 5 rounds
export function GanadorJuego({userPoints, computerPoints, finishGame, resetAllGame}){
    const mensaje = userPoints>computerPoints
                    ? `Resultado Final: Ganaste ${userPoints} a ${computerPoints}`
                    : `Resultado Final: Perdiste ${userPoints} a ${computerPoints}`
    return (
        <>
            {finishGame && (
                <DivGanadorJuego>
                    <h2>{mensaje}</h2>
                    <button
                        onClick={resetAllGame}>
                        Reiniciar juego
                    </button>    
                </DivGanadorJuego>
            )}
        </>
    )
}