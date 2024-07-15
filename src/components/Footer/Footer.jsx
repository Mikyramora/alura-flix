import { styled } from "styled-components";

const FooterStyled = styled.footer`
  background: url(/img/footer.png) no-repeat center center;
  background-size: cover;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 100px;
  max-width: 100%;
  margin-bottom: 0;
  img{
        width: 220px;
        margin-left: 30px;
        padding: 20px;
        background-color: aliceblue;
    }

    @media (max-width: 1040px){
      min-height: 70px;
        img{
            width: 150px;
            padding: 15px;
        }
    }

    @media (max-width: 740px){
      display: none;
    }
`;


const TituloEstilizado = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: aliceblue;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <TituloEstilizado>Desarrollado por Amy Morales</TituloEstilizado>
      <img src="img/tattoo.png"/>
    </FooterStyled>
  );
};

export default Footer;