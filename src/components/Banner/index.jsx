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
`


const TituloEstilizado = styled.h2`
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    max-width: 700px;
`

const ParrafoEstilizado = styled.p`
    width: 820px;
    max-height: 200px;
    font-size: 25px;
    line-height: 35px;
    color: aliceblue;
    overflow-x: auto ;
    scrollbar-width: thin;
    scrollbar-color: #4391b4 #6BD1FF;
`


const IframeEstilizado = styled.iframe`
    margin-right: 200px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 3px darkblue;
    border: 0;
    width: 500px; 
    height: 350px; 
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
        <IframeEstilizado
                        src={videoURL}
                        allow="accelerometer;autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      </FigureEstilizada>
  );
};

export default Banner;