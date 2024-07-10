import styled from "styled-components"

const BotonesCategoriaStyled = styled.div`
    width: 380px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
`

const BotonBorrarStyled = styled.button`
    width: 100px;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    cursor: pointer;

`

const BotonEditarStyled = styled.button`
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
    
}

export default BotonesCategoria