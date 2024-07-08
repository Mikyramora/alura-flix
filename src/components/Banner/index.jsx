import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background: url(/img/banner.png) no-repeat center center;
  background-size: cover;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
  margin: 0;
  max-width: 100%;
`

const ContainerPrincipal = styled.section`
  min-height: 280px;
  max-width: 90%;
`
const ContainerBannerEstilizado = styled.div`
  height: 400px;
  width: 600px;
  margin: 50px 0 0 150px;
`

const CategoriaEstilizadaPrincipal = styled.h1`
  width: 265px;
  height: 52px;
  background: #6BD1FF;
  color: aliceblue;
  border-radius: 15px;
  font-weight: 900;
  font-size: 50px;
  padding: 8px 14px;
`


const TituloEstilizado = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 300px;
`

const ParrafoEstilizado= styled.p`
  width: 800px;
  height: 100px;
  font-size: 25px;
  line-height: 41px;
  color: aliceblue;
`

const IframeEstilizado= styled.iframe`
  margin-right: 200px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 3px darkblue;
`

const Banner = ({categoriaprin, texto, parrafo}) => {
  return (
    <FigureEstilizada>
      <ContainerBannerEstilizado>
        <CategoriaEstilizadaPrincipal>{categoriaprin}</CategoriaEstilizadaPrincipal>
        <TituloEstilizado>{texto}</TituloEstilizado>
        <ParrafoEstilizado>{parrafo}</ParrafoEstilizado>
      </ContainerBannerEstilizado>
      <IframeEstilizado width="470" height="320" 
      src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis" 
      title="YouTube video player" frameBorder="0" allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;