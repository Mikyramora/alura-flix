import {styled} from "styled-components";
import BotonesCategoria from "../BotonesCategoria";
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

const FigureEstilizada = styled.figure`
    flex-grow: 1;
    display: block;
    align-items: center;
    justify-content: space-around;
    min-height: 40vh;
    margin: 35px 41px;
    max-width: 100%;

    @media (max-width:1600px){
     min-height: 30vh;
    }

    @media (max-width: 800px){
        margin: 25px 80px;
    }

    @media (max-width: 600px){
      margin: 30px 30px 30px 45px;
    }
`

const CategoriaEstilizada = styled.h1`
    width: 15vw;
    height: 3.2vh;
    text-align: center;
    color: aliceblue;
    border-radius: 15px;
    font-weight: 900;
    font-size: 25px;
    padding: 5px;
    

    @media (max-width: 1040px){
      width: 18vw;
      font-size: 25px;
      height: 2.3vh;
    }

    @media (max-width: 800px){
      width: 160px;
      font-size: 19px;
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

    @media (max-width:1600px){
     height: 33.5vh;
    }

    @media (max-width: 1350px){
      
    }

    @media (max-width: 600px){
      height: 35vh;
    }
`

const CardCategoria = styled.div`
    background-color: #0a082c;
    width: 22vw;
    height: 29vh;
    margin-right: 50px;
    border-radius: 15px;
    
    @media (max-width:1600px){
     width: 54vw;
     height: 32.5vh;
    }

    @media (max-width: 1040px){
      height: 32vh;
      width: 40vw;
    }

    @media (max-width: 870px){
        margin-right: 100px;
        height: 33vh;
        width: 55vw;
    }

    @media (max-width: 600px){
     margin-right: 55px;
     width: 75vw;
     height: 32vh;
    }
`

const ImgEstilizado = styled.img`
    width: 21vw;
    height: 24vh;
    border: 0;
    border-radius: 15px 15px;

    @media (max-width:1600px){
     width: 29vw;
     height: 28vh;
    }

    @media (max-width: 1350px){
      width: 40vw;
    }

    @media (max-width: 1040px){
      width: 46vw;
    }

    @media (max-width: 800px){
      width: 70vw;
    }
    @media (max-width: 600px) {
      width: 75vw;
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