import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px;
    margin-right: 70px;
`

const ButtonHome = styled.button`
    background-color: aliceblue;
    width: 200px;
    height: 55px;
    color: #46b1f8;
    padding: 10px;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    border: 5px solid #46b1f8;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background-color: #f7e8f5;
    }
`

const ButtonNuevo = styled.button`
    background-color: aliceblue;
    width: 200px;
    height: 55px;
    color: #46b1f8;
    padding: 10px;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    border: 5px solid #46b1f8;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background-color: #f7e8f5;
    }
`

const ButtonContainer=()=>{
    return(
            <ContainerStyled>
                <Link to= "/"><ButtonHome>HOME</ButtonHome></Link>
                <Link to="/nuevo"><ButtonNuevo >NUEVO VIDEO</ButtonNuevo></Link>
            </ContainerStyled>
        
    )
}

export default ButtonContainer