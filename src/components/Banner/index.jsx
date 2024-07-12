<<<<<<< HEAD
import {styled} from "styled-components";
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

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

const ContainerBannerEstilizado = styled.div`
    height: 430px;
    width: 800px;
    margin: 50px 0 10px 150px;
`

const CategoriaEstilizadaPrincipal = styled.h1`
    width: 270px;
    height: 52px;
    background: #6BD1FF;
    color: aliceblue;
    border-radius: 15px;
    font-weight: 900;
    font-size: 48px;
    padding: 8px;
    text-align: center;
=======
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

const ContainerBannerEstilizado = styled.div`
  height: 430px;
  width: 800px;
  margin: 50px 0 10px 150px;
`

const CategoriaEstilizadaPrincipal = styled.h1`
  width: 270px;
  height: 52px;
  background: #6BD1FF;
  color: aliceblue;
  border-radius: 15px;
  font-weight: 900;
  font-size: 48px;
  padding: 8px;
  text-align: center;
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
`


const TituloEstilizado = styled.h2`
<<<<<<< HEAD
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 700px;
    overflow: hidden;
`

// TODO: validate what happen if we have a too long description
const ParrafoEstilizado = styled.p`
    width: 800px;
    max-height: 300px;
    font-size: 25px;
    line-height: 41px;
    color: aliceblue;
    overflow-x: hidden;
`

const IframeEstilizado = styled.iframe`
    margin-right: 200px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 3px darkblue;
    border: 0;
`

const Banner = () => {

  const {metadata} = useAluraFlixContext()

  const {categoria, titulo, descripcion, videoURL} = metadata;


  return (
      <FigureEstilizada>
        <ContainerBannerEstilizado>
          <CategoriaEstilizadaPrincipal>{categoria}</CategoriaEstilizadaPrincipal>
          <TituloEstilizado>{titulo}</TituloEstilizado>
          <ParrafoEstilizado>{descripcion}</ParrafoEstilizado>
        </ContainerBannerEstilizado>
        <IframeEstilizado width="470" height="320"
                          src={videoURL}
                          allow="accelerometer;
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      </FigureEstilizada>
=======
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 700px;
  overflow: hidden;
`

const ParrafoEstilizado= styled.p`
  width: 800px;
  max-height: 300px;
  font-size: 25px;
  line-height: 41px;
  color: aliceblue;
  overflow-x: hidden;
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
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
  );
};

export default Banner;