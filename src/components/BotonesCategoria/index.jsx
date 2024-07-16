import styled from "styled-components"
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

const BotonesCategoriaStyled = styled.div`
    width: 20.7vw;
    height: 4vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;

    @media (max-width:1420px){
     width: 27vw;
     height: 2.4vh;
    }

    @media (max-width: 1040px){
      width: 41vw;
    }

    @media (max-width: 600px){
      width: 75vw;
    }
`

const BotonStyled = styled.button`
    width: 6vw;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    border-radius: 7px;
    cursor: pointer;
    
    &:hover {
        background-color: darkblue;
    }

    @media (max-width:1420px){
     width: 7.1vw;
    }

    @media (max-width: 1040px){
      width: 11vw;
      height: 3.2vh;
    }
    @media (max-width: 600px){
      width: 22vw;
      height: 3.2vh;
    }
`

const ImagenesBotonesCategoriaStyled = styled.img`
    margin-right: 10px;
    width: 1vw;

    @media (max-width: 1040px){
      width: 1.2vw;
      margin-right: 8px;
    }
    @media (max-width: 700px){
      margin-right: 5px;
      width: 2vw;
    }
`


const BotonesCategoria = ({id}) => {

  const {deleteVideo, showEditForm} = useAluraFlixContext()

  return (
      <BotonesCategoriaStyled>
        <BotonStyled
            onClick={() => deleteVideo(id)}
        >
          <ImagenesBotonesCategoriaStyled src="/img/Borrar.png"/>
          BORRAR
        </BotonStyled>
        <BotonStyled
            onClick={() => showEditForm(id)}
        >
          <ImagenesBotonesCategoriaStyled src="/img/Edit.png"/>
          EDITAR
        </BotonStyled>
      </BotonesCategoriaStyled>

  )

}

export default BotonesCategoria