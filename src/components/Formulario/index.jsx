import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import SeleccionarOpciones from "../SeleccionarOpciones"
import CampoDescripcion from "../CampoDescripcion"
import SaveButton from "../BotonGuardar"
import CleanButton from "../BotonLimpiar"
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import {useEffect, useState} from "react";
import {constraints} from "../../res/utils.js";

const FilasFormulario = styled.figure`
    display: flex;
    flex-direction: row;
    width: 1350px;
    justify-content: space-around;
`

const ButtonContainer = styled.div`
    width: 430px;
    height: 55px;
    margin: 50px 64px;
    display: flex;
    justify-content: space-between;
`

const Formulario = () => {

  const {video, onChangeInput, clean, onSubmitForm} = useAluraFlixContext()

  const initialFormValuesCheck = {
    titulo: false,
    categoria: false,
    imagenURL: false,
    videoURL: false,
    descripcion: false,
  }

  const [formValuesCheck, setFormValuesCheck] = useState(initialFormValuesCheck)

  const resetForm = () => {
    clean()
    setFormValuesCheck(initialFormValuesCheck)
  }

  const checkFrom = () => {
    const check = {}
    Object.keys(video).forEach((key) => {
      check[key] = constraints.isEmptyValue(video[key])
    })
    setFormValuesCheck(check)
    return Object.values(check).every((value) => !value)
  }

  const onBlurCheckInput = (e) => {
    const {name, value} = e.target
    setFormValuesCheck({
      ...formValuesCheck,
      [name]: constraints.isEmptyValue(value)
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (checkFrom()) {
      await onSubmitForm()
      resetForm()
    }
  }

  useEffect(() => {
    resetForm()
  }, []);

  return (
      <form onSubmit={onSubmit}>
        <div>
          <FilasFormulario>
            <CampoTexto
                titulo="Título"
                name="titulo"
                value={video.titulo}
                onChange={onChangeInput}
                onBlur={onBlurCheckInput}
                placeholder="Ingrese el título"
                hasError={formValuesCheck.titulo}
            />
            <SeleccionarOpciones
                name="categoria"
                value={video.categoria}
                onChange={onChangeInput}
                onBlur={onBlurCheckInput}
                hasError={formValuesCheck.categoria}
            />
          </FilasFormulario>
          <FilasFormulario>
            <CampoTexto
                titulo="Imagen"
                placeholder="Ingrese el enlace de la imagen"
                name="imagenURL"
                value={video.imagenURL}
                onChange={onChangeInput}
                onBlur={onBlurCheckInput}
                hasError={formValuesCheck.imagenURL}
            />

            <CampoTexto
                titulo="Video"
                placeholder="Ingrese el enlace del video"
                name="videoURL"
                value={video.videoURL}
                onChange={onChangeInput}
                onBlur={onBlurCheckInput}
                hasError={formValuesCheck.videoURL}
            />
          </FilasFormulario>
          <CampoDescripcion
              name="descripcion"
              value={video.descripcion}
              onChange={onChangeInput}
              onBlur={onBlurCheckInput}
              placeholder="¿De qué se trata éste video?"
              hasError={formValuesCheck.descripcion}
          />
          <ButtonContainer>
            <CleanButton
                type="button"
                onClick={() => resetForm()} texto="LIMPIAR"/>
            <SaveButton texto="GUARDAR"/>
          </ButtonContainer>
        </div>
      </form>
  )
}

export default Formulario