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
    min-height: 50vh;
    margin: 0;
    max-width: 100%;

    @media (max-width:1420px){
     min-height: 33vh;
    }

    @media (max-width: 1040px){
        min-height: 30vh;
    }

`

const ContainerBannerEstilizado = styled.div`
    height: 40vh;
    width: 820px;
    margin: 0 0 10px 130px;

    @media (max-width:1420px){
        margin: 20px 0 10px 50px;
        width: 48vw;
        height: 44vh;
    }

    @media (max-width: 1040px){
        margin: 15px 0 10px 20px;
        width: 53vw;
        height: 25vh;
    }

`

const CategoriaEstilizadaPrincipal = styled.h1`
    width: 18vw;
    height: 52px;
    background-color: #462079;
    color: aliceblue;
    border-radius: 15px;
    font-weight: 900;
    font-size: 47px;
    padding: 8px;
    text-align: center;

    @media (max-width:1420px){
        width: 23vw;
        height: 42px;
        font-size: 38px;
    }

    @media (max-width: 1040px){
        font-size: 28px;
        height: 32px;
    }
`

const TituloEstilizado = styled.h2`
    font-weight: 400;
    font-size: 40px;
    color: aliceblue;
    max-width: 70vh;
    height: 93px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #462079 #593785;

    @media (max-width:1420px){
     font-size: 30px;
     height: 9.1vh;
    }

    @media (max-width: 1040px){
        font-size: 22px;
        max-width: 43vw;
        height: 4.6vh;
    }
`

const ParrafoEstilizado = styled.p`
    width: 820px;
    max-height: 15vh;
    font-size: 25px;
    line-height: 35px;
    color: aliceblue;
    overflow: auto;
    scrollbar-color: #462079 #593785;
    scrollbar-width: thin;

    @media (max-width:1420px){
     font-size: 20px;
     max-height: 14vh;
     width: 47vw;
    }

    @media (max-width: 1040px){
        font-size: 17px;
        max-height: 10vh;
        width: 49vw;
    }
`

const IframeEstilizado = styled.iframe`
    margin-right: 200px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 3px darkblue;
    border: 0;
    width: 35vw; 
    height: 40vh; 

    @media (max-width:1420px){
        margin-right: 50px;
        width: 40vw;
        height: 40vh;
    }

    @media (max-width: 1040px){
        margin: 15px 25px 18px 0;
        width: 43vw;
        height: 25vh;
    }
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