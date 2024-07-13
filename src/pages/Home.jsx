import Banner from "../components/Banner"
import CategoriaVideos from "../components/CategoriaVideos"
import {useEffect} from "react";
import {useAluraFlixContext} from "../contex/AluraFlixContext.jsx";
import ModalEditar from "../components/ModalEditar/index.jsx";


const Home = () => {

  const {videosByCategory, findVideosByCategory} = useAluraFlixContext()


  useEffect(() => {
    findVideosByCategory()
  }, []);


  return (<>
    <Banner/>
    {
      // Order the videos by id
      videosByCategory.sort((a, b) => a.id - b.id)
          .map(({background,category, scrollbarColor, videos}) =>
              <CategoriaVideos
                  key={category}
                  videoList={videos}
                  categoryName={category}
                  background={background}
                  scrollbarColor={scrollbarColor}/>
          )
    }
    <ModalEditar/>
  </>)
}

export default Home