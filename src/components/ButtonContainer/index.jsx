import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px;
    margin-right: 70px;

    @media (max-width:1420px){
     margin-right: 50px;
    }

    @media (max-width: 1040px){
        margin-right: 20px;
        width: 300px;
    }
`

const ButtonHome = styled.button`
    background-color: #190b28;
    width: 200px;
    height: 55px;
    color: aliceblue;
    padding: 10px;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    border-radius: 15px;
    border-color: darkblue;
    box-shadow: 0px 0px 20px 10px darkblue;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }

    @media (max-width: 1040px){
        width: 130px;
        font-size: 15px;
    }
`

const ButtonNuevo = styled.button`
    background-color: #190b28;
    width: 200px;
    height: 55px;
    color: aliceblue;
    padding: 10px;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    border-radius: 15px;
    border-color: darkblue;
    box-shadow: 0px 0px 20px 10px darkblue;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }

    @media (max-width: 1040px){
        width: 130px;
        font-size: 15px;
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