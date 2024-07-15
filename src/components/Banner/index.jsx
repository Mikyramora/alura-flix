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

    @media (max-width:1420px){
     min-height: 300px;
    }

    @media (max-width: 1040px){
        min-height: 200px;
    }

`

const ContainerBannerEstilizado = styled.div`
    height: 370px;
    width: 820px;
    margin: 30px 0 10px 130px;

    @media (max-width:1420px){
        margin: 20px 0 10px 50px;
    }

    @media (max-width: 1040px){
        margin: 15px 0 10px 20px;
        width: 310px;
        height: 280px;
    }

`

const CategoriaEstilizadaPrincipal = styled.h1`
    width: 270px;
    height: 52px;
    background-color: #462079;
    color: aliceblue;
    border-radius: 15px;
    font-weight: 900;
    font-size: 48px;
    padding: 8px;
    text-align: center;

    @media (max-width:1420px){
        width: 200px;
        height: 42px;
        font-size: 38px;
    }

    @media (max-width: 1040px){
        font-size: 28px;
        width: 150px;
        height: 32px;
    }
`

const TituloEstilizado = styled.h2`
    font-weight: 400;
    font-size: 40px;
    color: aliceblue;
    max-width: 820px;
    height: 93px;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #462079 #593785;

    @media (max-width:1420px){
     font-size: 32px;
     max-width: 500px;
     height: 78px;
    }

    @media (max-width: 1040px){
        font-size: 22px;
        max-width: 300px;
        height: 58px;
    }
`

const ParrafoEstilizado = styled.p`
    width: 820px;
    max-height: 175px;
    font-size: 25px;
    line-height: 35px;
    color: aliceblue;
    overflow: auto;
    scrollbar-color: #462079 #593785;
    scrollbar-width: thin;

    @media (max-width:1420px){
     font-size: 20px;
     max-height: 140px;
     width: 610px;
    }

    @media (max-width: 1040px){
        font-size: 17px;
        max-height: 100px;
        width: 310px;
    }
`

const IframeEstilizado = styled.iframe`
    margin-right: 200px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 3px darkblue;
    border: 0;
    width: 500px; 
    height: 350px; 

    @media (max-width:1420px){
        margin-right: 50px;
        width: 450px;
        height: 310px;
    }

    @media (max-width: 1040px){
        margin: 15px 25px 18px 0;
        width: 370px;
        height: 280px;
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