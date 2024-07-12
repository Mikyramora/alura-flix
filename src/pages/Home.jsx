import Banner from "../components/Banner"
import CategoriaVideos from "../components/CategoriaVideos"
<<<<<<< HEAD
import {useEffect} from "react";
import {useAluraFlixContext} from "../contex/AluraFlixContext.jsx";


const Home = () => {

  const {videosByCategory, findVideosByCategory} = useAluraFlixContext()


  useEffect(() => {
    findVideosByCategory()
  }, []);


  return (<>
    <Banner/>
    {
      videosByCategory.map(({category, videos},) =>
          <CategoriaVideos key={category} videoList={videos} categoryName={category}/>
      )
    }
  </>)
=======
import ModalEditar from "../components/ModalEditar"


const Home = () => {
    return (
        <>
                <Banner categoriaprin="MÁS VISTO" texto="Challenge flix" parrafo="En ésta galería podrás encontrar algunos de los principales estilos del arte del tatuaje, así como algunos de sus más destacados representantes."/>
                <CategoriaVideos />
        </>
    )
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
}

export default Home