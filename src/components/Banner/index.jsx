import {styled} from "styled-components";
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

const FigureEstilizada = styled.figure`
    background: url(/img/banner.png) no-repeat center center;
    background-size: cover;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    min-height: 50vh;
    margin: 0;
    max-width: 100%;

    @media (max-width:1600px){
        min-height: 40vh;
    }

    @media (max-width: 1040px){
        min-height: 30vh;
    }

    @media (max-width: 740px){
        flex-direction: column;
        max-height: 39vh;
    }
    
`

const ContainerBannerEstilizado = styled.div`
    height: 40vh;
    width: 42vw;
    
    @media (max-width:1600px){
        width: 46vw;
        height: 30vh;
    }

    @media (max-width: 1040px){
        width: 49vw;
        height: 25vh;
    }

    @media (max-width: 740px){
        height: 8.5vh;
        width: 85vw;
        margin-top: 10px;
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

    @media (max-width:1600px){
        width: 23vw;
        height: 42px;
        font-size: 38px;
    }

    @media (max-width: 1040px){
        font-size: 28px;
        height: 32px;
    }

    @media (max-width: 740px){
        font-size: 1.1em;
        width: 28vw;
        height: 1.9vh;
        padding: 1px;
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

    @media (max-width:1600px){
     font-size: 30px;
     height: 6.6vh;
    }

    @media (max-width: 1040px){
        font-size: 22px;
        max-width: 43vw;
        height: 4.6vh;
    }

    @media (max-width: 740px){          
        max-width: 85vw;
        height: 2.3vh;
        font-size: 1.1em;
    }
`

const ParrafoEstilizado = styled.p`
    width: 46vw;
    max-height: 14.8vh;
    font-size: 25px;
    line-height: 35px;
    color: aliceblue;
    overflow: auto;
    scrollbar-color: #462079 #593785;
    scrollbar-width: thin;

    @media (max-width:1600px){
     font-size: 20px;
     max-height: 10vh;
     width: 47vw;
    }

    @media (max-width: 1040px){
        font-size: 17px;
        max-height: 10vh;
        width: 49vw;
    }

    @media (max-width: 740px){
        display: none;
    }
`

const IframeEstilizado = styled.iframe`
    
    border-radius: 15px;
    box-shadow: 5px 5px 10px 3px darkblue;
    border: 0;
    width: 35vw; 
    height: 40vh; 

    @media (max-width:1600px){
        width: 40vw;
        height: 35vh;
    }

    @media (max-width: 1040px){
        width: 43vw;
        height: 25vh;
        margin-bottom: 10px;
    }

    @media (max-width: 740px){
        width: 84vw;
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