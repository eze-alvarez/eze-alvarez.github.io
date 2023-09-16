import styled from "styled-components"

const DivPlayers = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2{
        margin: 0.5rem 0;
    }

    & span{
        font-size: 1.5rem;
    }
`


//Componente que se encarga de mostrar el marcador general
export function Marcador({userName,userPoints,computerPoints,empate}){
    return (
        <>
            <DivPlayers>
                <h2>{userName===''
                ? "Jugador 1"
                : userName
            }</h2>
                <span>{userPoints}</span>       
            </DivPlayers>
            
            <DivPlayers>
                <h2>Empates</h2>
                <span>{empate}</span>       
            </DivPlayers>

            <DivPlayers>
                <h2>Computadora</h2>
                <span>{computerPoints}</span>       
            </DivPlayers>

            
        </>
    )
}