import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  width: 7rem;
  height: 7rem;

  & img{
    width: 100%;
    height: auto;
  }
`
//botones piedra papel tijera para que elija el usuario
export function OptionButton({option, disabled, handlePlay}) {
    return (
      <ButtonIcon
          key={option.id}
          className='btn-option'
          disabled={disabled}
          onClick={()=>handlePlay(option.id)}
          title={option.name}
      >
        <img src={option.image} alt={option.name}></img>
      </ButtonIcon>
    )
  }