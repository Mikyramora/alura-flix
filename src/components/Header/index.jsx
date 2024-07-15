import styled from "styled-components"
import ButtonContainer from "../ButtonContainer"

const HeaderEstilizado = styled.header`
    background: url(/img/fondo-header.png) no-repeat center center;
    background-size: cover;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    
    img{
        width: 280px;
        margin-left: 75px;
        padding: 24px;
        background-color: aliceblue;
    }

    @media (max-width: 1040px){
        padding: 10px 0;
        img{
            width: 200px;
            margin: 0 20px;
        }
    }
`

const Header = () => {
  return <HeaderEstilizado>
            <img src="img/tattoo.png"/>
            <ButtonContainer/>
        </HeaderEstilizado>
}
export default Header