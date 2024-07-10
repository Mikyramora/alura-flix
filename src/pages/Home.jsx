import Banner from "../components/Banner"
import CategoriaVideos from "../components/CategoriaVideos"


const Home = () => {
    return (
        <>
                <Banner categoriaprin="MÁS VISTO" texto="Challenge flix" parrafo="En ésta galería podrás encontrar algunos de los principales estilos del arte del tatuaje, así como algunos de sus más destacados representantes."/>
                <CategoriaVideos />
        </>
    )
}

export default Home