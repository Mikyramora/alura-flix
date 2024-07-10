import { styled } from "styled-components";
import BotonesCategoria from "../BotonesCategoria";

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
      scrollbar-color: #4391b4  #6BD1FF;
`

const CardCategoria = styled.div`
    background-color: #0a082c;
    width: 400px;
    height: 270px;
    margin-right: 50px;
`

const IframeEstilizado = styled.iframe`
    width: 400px;
    height: 230px;
`

const CategoriaVideos = () => {
    return (
        <FigureEstilizada>
            <CategoriaEstilizada>REALISTA</CategoriaEstilizada>
            <ContainerVideosEstilizado>
                <CardCategoria>
                    <IframeEstilizado
                        src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
                        <BotonesCategoria/>
                </CardCategoria>
                <CardCategoria>
                    <IframeEstilizado
                        src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
                        <BotonesCategoria/>
                </CardCategoria>
                <CardCategoria>
                    <IframeEstilizado
                        src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
                        <BotonesCategoria/>
                </CardCategoria>
                <CardCategoria>
                    <IframeEstilizado
                        src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
                        <BotonesCategoria/>
                </CardCategoria>
                <CardCategoria>
                    <IframeEstilizado
                        src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
                        <BotonesCategoria/>
                </CardCategoria>
                <CardCategoria>
                    <IframeEstilizado
                        src="https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></IframeEstilizado>
                        <BotonesCategoria/>
                </CardCategoria>
            </ContainerVideosEstilizado>
        </FigureEstilizada>
    );
};


export default CategoriaVideos