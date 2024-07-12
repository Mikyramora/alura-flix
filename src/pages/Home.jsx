import Banner from "../components/Banner"
import CategoriaVideos from "../components/CategoriaVideos"
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
}

export default Home