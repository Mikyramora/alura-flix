import { styled } from "styled-components";

const FooterStyled = styled.footer`
  background: url(/img/footer.png) no-repeat center center;
  background-size: cover;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 100px;
  max-width: 100%;
  margin-bottom: 0;
  img{
        width: 220px;
        margin-left: 30px;
        padding: 20px;
        background-color: aliceblue;
    }
`;


const TituloEstilizado = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: aliceblue;
  margin-left: 700px;

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