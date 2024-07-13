import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import SeleccionarOpciones from "../SeleccionarOpciones"
import CampoDescripcion from "../CampoDescripcion"
import SaveButton from "../BotonGuardar"
import CleanButton from "../BotonLimpiar"
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import {useState} from "react";

const FilasFormulario = styled.figure`
    display: flex;
    flex-direction: row;
    width: 1350px;
    justify-content: space-around;
`

const ButtonContainer = styled.div`
    width: 450px;
    height: 55px;
    margin: 60px 49px;
    display: flex;
    justify-content: space-around;
`

const Formulario = () => {

  const {video, onSubmitForm, onChangeInput, clean} = useAluraFlixContext()

  const [formValuesCheck, setFormValuesCheck] = useState({
    titulo: false,
    categoria: false,
    imagenURL: false,
    videoURL: false,
    descripcion: false
  })

  const onSubmit = (event) => {
    event.preventDefault()
    let isFormValid = true
    for (const key in video) {
      if (!video[key]) {
        setFormValuesCheck((prevState) => ({
          ...prevState,
          [key]: true
        }))
        isFormValid = false
      }
    }

    if (isFormValid) {
      onSubmitForm()
    }
  }

  const onChangeForm = (event) => {
    onChangeInput(event)
    setFormValuesCheck((prevState) => ({
      ...prevState,
      [event.target.name]: false
    }))
  }


  return (
      <form onSubmit={onSubmit}>
        <div>
          <FilasFormulario>
            <CampoTexto
                titulo="Título"
                name="titulo"
                value={video.titulo}
                onChange={onChangeForm}
                placeholder="Ingrese el título"
                hasError={formValuesCheck.titulo}
            />
            <SeleccionarOpciones
                name="categoria"
                value={video.categoria}
                onChange={onChangeForm}
                hasError={formValuesCheck.categoria}
                defaultValue=""
            />
          </FilasFormulario>
          <FilasFormulario>
            <CampoTexto
                titulo="Imagen"
                placeholder="Ingrese el enlace de la imagen"
                name="imagenURL"
                value={video.imagenURL}
                onChange={onChangeForm}
                hasError={formValuesCheck.imagenURL}
            />

            <CampoTexto
                titulo="Video"
                placeholder="Ingrese el enlace del video"
                name="videoURL"
                value={video.videoURL}
                onChange={onChangeForm}
                hasError={formValuesCheck.videoURL}
            />
          </FilasFormulario>
          <CampoDescripcion
              name="descripcion"
              value={video.descripcion}
              onChange={onChangeForm}
              placeholder="¿De qué se trata éste video?"
              hasError={formValuesCheck.descripcion}
          />
          <ButtonContainer>
            <SaveButton texto="GUARDAR"/>
            <CleanButton
                onClick={() => {
                  clean()
                }}
                texto="LIMPIAR"/>
          </ButtonContainer>
        </div>
      </form>
  )
}

export default Formulario