import {styled} from "styled-components";
import BotonesCategoria from "../BotonesCategoria";
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

const FigureEstilizada = styled.figure`
    flex-grow: 1;
    display: block;
    align-items: center;
    justify-content: space-around;
    min-height: 40vh;
    margin: 35px 60px;
    max-width: 100%;

    @media (max-width:1420px){
     min-height: 37vh;
    }
`

const CategoriaEstilizada = styled.h1`
    width: 15vw;
    height: 33px;
    text-align: center;
    color: aliceblue;
    border-radius: 15px;
    font-weight: 900;
    font-size: 30px;
    padding: 5px;

    @media (max-width: 1040px){
      width: 18vw;
      font-size: 25px;
      height: 2.3vh;
    }
`

const ContainerVideosEstilizado = styled.div`
    height: 32vh;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    scrollbar-width: thin;

    @media (max-width:1420px){
     height: 32.5vh;
    }
`

const CardCategoria = styled.div`
    background-color: #0a082c;
    width: 22vw;
    height: 29vh;
    margin-right: 50px;
    border-radius: 15px;
    
    @media (max-width:1420px){
     width: 50vh;
    }

    @media (max-width: 1040px){
      height: 28vh;
    }
`

const ImgEstilizado = styled.img`
    width: 21vw;
    height: 24vh;
    border: 0;
    border-radius: 15px 15px;

    @media (max-width:1420px){
     width: 27vw;
    }

    @media (max-width: 1040px){
      width: 41vw;
    }
`

const CategoriaVideos = ({videoList, categoryName, background, scrollbarColor}) => {
  const {showIframeVideo} = useAluraFlixContext()

  return (
      <FigureEstilizada>
        <CategoriaEstilizada style={{background: `${background}`}}>{categoryName}</CategoriaEstilizada>
        <ContainerVideosEstilizado style={{scrollbarColor: `${scrollbarColor} ${background}`}}>
          {videoList.map((video) => (
              <CardCategoria key={video.id}>
                <ImgEstilizado
                    onClick={() => {
                      showIframeVideo(video)
                      window.scrollTo({top: 0, behavior: 'smooth'})
                    }}
                    src={video.imagenURL}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <BotonesCategoria id={video.id}/>
              </CardCategoria>
          ))}
        </ContainerVideosEstilizado>

      </FigureEstilizada>
  );
};


export default CategoriaVideos