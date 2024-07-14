import styled from "styled-components"
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

const BotonesCategoriaStyled = styled.div`
    width: 400px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
`

const BotonStyled = styled.button`
    width: 100px;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    border-radius: 7px;
    cursor: pointer;
    
    &:hover {
        background-color: darkblue;
    }
`

const ImagenesBotonesCategoriaStyled = styled.img`
    margin-right: 10px;
    width: 15px;
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