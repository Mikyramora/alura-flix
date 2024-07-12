import styled from "styled-components"
<<<<<<< HEAD
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
=======
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585

const BotonesCategoriaStyled = styled.div`
    width: 380px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
`

<<<<<<< HEAD
const BotonStyled = styled.button`
=======
const BotonBorrarStyled = styled.button`
    width: 100px;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    cursor: pointer;

`

const BotonEditarStyled = styled.button`
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
    width: 100px;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    cursor: pointer;
`

const ImagenesBotonesCategoriaStyled = styled.img`
    margin-right: 10px;
    width: 15px;
`


<<<<<<< HEAD
const BotonesCategoria = ({id}) => {

  const {deleteVideo} = useAluraFlixContext()

  return (
      <BotonesCategoriaStyled>
        <BotonStyled
            onClick={() => deleteVideo(id)}
        >
          <ImagenesBotonesCategoriaStyled src="/img/Borrar.png"/>
          BORRAR
        </BotonStyled>
        <BotonStyled>
          <ImagenesBotonesCategoriaStyled src="/img/Edit.png"/>
          EDITAR
        </BotonStyled>
      </BotonesCategoriaStyled>

  )

=======
const BotonesCategoria = () => {
    return (
        <BotonesCategoriaStyled>
            <BotonBorrarStyled>
                <ImagenesBotonesCategoriaStyled src="/img/Borrar.png"/>
                BORRAR
            </BotonBorrarStyled>
            <BotonEditarStyled>
                <ImagenesBotonesCategoriaStyled src="/img/Edit.png"/>
                EDITAR
            </BotonEditarStyled>
        </BotonesCategoriaStyled>

    )
    
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
}

export default BotonesCategoria