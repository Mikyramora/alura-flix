import {styled} from "styled-components";
import BotonesCategoria from "../BotonesCategoria";
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";

const FigureEstilizada = styled.figure`
    flex-grow: 1;
    display: block;
    align-items: center;
    justify-content: space-around;
    min-height: 350px;
    margin: 35px 60px;
    max-width: 100%;
`

const CategoriaEstilizada = styled.h1`
    width: 265px;
    height: 33px;
    text-align: center;
    background: #6BD1FF;
    color: aliceblue;
    border-radius: 15px;
    font-weight: 900;
    font-size: 30px;
    padding: 5px;
`

const ContainerVideosEstilizado = styled.div`
    height: 305px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #4391b4 #6BD1FF;
`

const CardCategoria = styled.div`
    background-color: #0a082c;
    width: 400px;
    height: 270px;
    margin-right: 50px;
`

const ImgEstilizado = styled.img`
    width: 400px;
    height: 230px;
    border: 0;
`

const CategoriaVideos = ({videoList, categoryName}) => {
  const {showIframeVideo} = useAluraFlixContext()


  return (
      <FigureEstilizada>
        <CategoriaEstilizada>{categoryName}</CategoriaEstilizada>
        <ContainerVideosEstilizado>
          {videoList.map((video) => (
              <CardCategoria key={video.id}>
                <ImgEstilizado
                    onClick={() => showIframeVideo(video)}
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