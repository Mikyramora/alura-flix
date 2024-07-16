import {createContext, useContext, useState} from "react";
import axios from "axios";
import {URLs} from "../res/urls.js";
import Swal from 'sweetalert2'
import {convertToEmbeddedURL, extractThumbnail} from "../res/utils.js";

const AluraFlixContext = createContext({})

export const useAluraFlixContext = () => {
  const context = useContext(AluraFlixContext)
  if (!context) {
    throw Error("AluraFlix must be used within a AluraFlixProvider")
  }
  return context
}


export const AluraFlixProvider = ({children}) => {

  const initialVideoState = {
    titulo: '',
    categoria: '',
    imagenURL: '',
    videoURL: '',
    descripcion: ''
  }
  const [video, setVideo] = useState(initialVideoState)

  const [videosByCategory, setVideosByCategory] = useState([])

  const initialMetadataState = {
    titulo: "Challenge flix",
    categoria: "MÁS VISTO",
    videoURL: "https://www.youtube.com/embed/xoIwB_rAjJ8?si=fhAKTbNVuJbLVNis",
    descripcion: "En ésta galería podrás encontrar algunos de los principales estilos del arte del tatuaje, así como algunos de sus más destacados representantes."
  }
  const [metadata, setMetadata] = useState(initialMetadataState)

  const [categories, setCategories] = useState([{id: 0, titulo: "Cargando..."}])

  const [toggleModal, setToggleModal] = useState(false)

  const findAllCategories = async () => {
    const {data} = await axios.get(URLs.category)
    if (!data) {
      throw Error("Can't not load data :: findAllCategories")
    }
    setCategories(data)
  }

  const findVideosByCategory = async () => {
    const {data: categories} = await axios.get(URLs.category)
    if (!categories) {
      throw Error("Can't not load data :: findVideosByCategory")
    }

    const {data} = await axios.get(URLs.video)
    if (!data) {
      throw Error("Can't not load data :: findVideosByCategory")
    }

    const res = data.reduce((acc, video) => {
      const {
        id,
        description,
        background,
        scrollbarColor
      } = categories.find(category => category.description === video.categoria)

      if (!acc[description]) {
        acc[description] = {
          id,
          category: description,
          background,
          scrollbarColor,
          videos: []
        }
      }
      acc[description].videos.push(video)
      return acc
    }, {})

    setVideosByCategory(Object.values(res))
  }

  const showIframeVideo = (video) => {
    setMetadata(video)
  }

  //TODO
  const hideIframeVideo = () => {
    setMetadata(initialMetadataState)
  }

  const deleteVideo = async (id) => {
    const {status} = await axios.delete(`${URLs.video}/${id}`)
    if (status !== 200) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al intentar borrar el video"
      });
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El video se eliminó exitosamente",
      showConfirmButton: false,
      timer: 1500
    });
    await findVideosByCategory()
  }

  const showEditForm = async (id) => {
    const {data} = await axios.get(`${URLs.video}/${id}`)
    if (!data) {
      throw Error("Can't not load data :: loadVideo")
    }
    setVideo(data)
    setToggleModal(true)
  }

  const onChangeInput = (e) => {
    switch (e.target.name) {
      case "videoURL":

        setVideo({
          ...video,
          videoURL: convertToEmbeddedURL(e.target.value),
        })
        break
      case "imagenURL":
        setVideo({
          ...video,
          imagenURL: extractThumbnail(e.target.value),
        })
        break
      default:
        setVideo({
          ...video,
          [e.target.name]: e.target.value
        })
    }
  }

  const onSubmitForm = async (isEdit = false) => {
    if (isEdit) {
      const {status} = await axios.put(`${URLs.video}/${video.id}`, video)
      if (status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al intentar editar el video"
        });
      }
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El video se editó exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
      setToggleModal(false)
    } else {
      const {status} = await axios.post(URLs.video, video)
      if (status !== 201) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al intentar agregar el video"
        });
      }
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El video se agregó exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
    }
    await findVideosByCategory()
  }
  const clean = () => {
    setVideo(initialVideoState)
  }

  const closeModal = () => {
    setToggleModal(false)
    clean()
  }


  return <AluraFlixContext.Provider value={{
    categories,
    clean,
    closeModal,
    deleteVideo,
    findAllCategories,
    findVideosByCategory,
    hideIframeVideo,
    metadata,
    onChangeInput,
    onSubmitForm,
    setToggleModal,
    showEditForm,
    showIframeVideo,
    toggleModal,
    video,
    videosByCategory,
  }}>
    {children}
  </AluraFlixContext.Provider>
}
