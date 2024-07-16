import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    
    @media (max-width:1600px){
     width: 28vw;
    }

    @media (max-width: 1040px){
        margin-right: 20px;
        width: 300px;
    }
`

const ButtonHeader = styled.button`
    background-color: #190b28;
    width: 12vw;
    height: 6vh;
    color: aliceblue;
    padding: 8px;
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

    @media (max-width:1600px){
     width: 11vw;
     height: 7vh;
     font-size: 18px;
    }

    @media (max-width: 1040px){
        width: 15vw;
        font-size: 15px;
    }
`

const ButtonContainer=()=>{
    return(
            <ContainerStyled>
                <Link to= "/"><ButtonHeader>HOME</ButtonHeader></Link>
                <Link to="/nuevo"><ButtonHeader>NUEVO VIDEO</ButtonHeader></Link>
            </ContainerStyled>
        
    )
}

export default ButtonContainer