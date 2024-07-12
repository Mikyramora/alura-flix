import {createContext, useContext, useState} from "react";
import axios from "axios";
import {URLs} from "../res/urls.js";

const AluraFlixContext = createContext({})

export const useAluraFlixContext = () => {
  const context = useContext(AluraFlixContext)
  if (!context) {
    throw Error("AluraFlix must be used within a AluraFlixProvider")
  }
  return context
}


export const AluraFlixProvider = ({children}) => {

  const [videosByCategory, setVideosByCategory] = useState([])

  const initialMetadataState = {
    titulo: "Challenge flix",
    categoria: "MÁS VISTO",
    videoURL: "https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis",
    descripcion: "En ésta galería podrás encontrar algunos de los principales estilos del arte del tatuaje, así como algunos de sus más destacados representantes."
  }
  const [metadata, setMetadata] = useState(initialMetadataState)

  const [categories, setCategories] = useState([""])

  const findAllCategories = async () => {
    const {data} = await axios.get(URLs.category)
    if (!data) {
      throw Error("Can't not load data :: findAllCategories")
    }
    setCategories(data)
  }

  const findVideosByCategory = async () => {
    const {data} = await axios.get(URLs.video)
    if (!data) {
      throw Error("Can't not load data :: findVideosByCategory")
    }

    const res = data.reduce((acc, video) => {
      const {categoria} = video;
      if (!acc[categoria]) {
        acc[categoria] = {category: categoria, videos: []};
      }
      acc[categoria].videos.push(video);
      return acc;
    }, {});
    setVideosByCategory(Object.values(res))
  }

  const showIframeVideo = (video) => {
    setMetadata(video)
  }

  //TODO: maybe you need or not, if you prefer delete this function is ok
  const hideIframeVideo = () => {
    setMetadata(initialMetadataState)
  }

  //TODO: possible improvement using https://sweetalert2.github.io/
  const deleteVideo = async (id) => {
    const {status} = await axios.delete(`${URLs.video}/${id}`)
    if (status !== 200) {
      alert("Hubo un error al intentar borrar el video")
    }
    alert("El video se elimino exitosamente")
  }


  return <AluraFlixContext.Provider value={{
    videosByCategory,
    findVideosByCategory,
    showIframeVideo,
    metadata,
    hideIframeVideo,
    deleteVideo,
    findAllCategories,
    categories
  }}>
    {children}
  </AluraFlixContext.Provider>
}
