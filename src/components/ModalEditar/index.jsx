import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import styled from "styled-components";
import CampoTextoModal from "../CampoTextoModal/index.jsx";
import OpcionesModal from "../OpcionesModal/index.jsx";
import TextAModal from "../TextAModal/index.jsx";
import {useState} from "react";
import {constraints} from "../../res/utils.js";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const DialogEstilizado = styled.div`
    position: relative;
    width: 45%;
    height: 87%;
    margin: auto;
    background-color: #03122F;
    border-radius: 17px;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1420px) {
        width: 52vw;
        height: 90vh;
    }

    @media (max-width: 1040px) {
        width: 75vw;
        height: 68.5vh;
    }
`

const TituloModalEstilizado = styled.h2`
    font-size: 50px;
    border-width: 3px;
    border-style: solid none solid none;
    border-color: gold;

    @media (max-width: 1420px) {
        font-size: 40px;
    }
`
const ContadorEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FormEstilizado = styled.form`
    padding: 0;
`
const BotonCerrar = styled.button`
    position: absolute;
    top: 13px;
    right: 13px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 6px 11px;

    &:hover {
        background-color: #d32f2f;
    }
`;

const BotonesContenedor = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 1420px) {
        margin-top: 15px;
    }
`;

const BotonEditar = styled.button`
    background-color: transparent;
    color: white;
    font-size: 18px;
    font-weight: 800;
    border: 2px solid white;
    border-radius: 10px;
    width: 8vw;
    padding: 10px 0;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }

    @media (max-width: 1420px) {
        font-size: 15px;
        width: 9vw;
        padding: 8px 0;
    }

    @media (max-width: 1040px) {
        width: 11vw;
    }
`;


const ModalEditar = () => {
  const {toggleModal, clean, closeModal, video, onChangeInput, onSubmitForm} = useAluraFlixContext()

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
      await onSubmitForm(true)
      resetForm()
    }
  }

  return toggleModal ? (<Overlay>
    <DialogEstilizado>
      <ContadorEstilizado>
        <FormEstilizado onSubmit={onSubmit}>
          <TituloModalEstilizado>EDITAR CARD:</TituloModalEstilizado>
          <CampoTextoModal
              name="titulo"
              onChange={onChangeInput}
              onBlur={onBlurCheckInput}
              titulo="Título"
              placeholder="Ingrese el título"
              value={video.titulo}
              hasError={formValuesCheck.titulo}
          />
          <OpcionesModal
              name="categoria"
              value={video.categoria}
              onChange={onChangeInput}
              onBlur={onBlurCheckInput}
              hasError={formValuesCheck.categoria}
          />
          <CampoTextoModal
              name="imagenURL"
              titulo="Imagen"
              placeholder="Ingrese el enlace de la imagen"
              value={video.imagenURL}
              onChange={onChangeInput}
              onBlur={onBlurCheckInput}
              hasError={formValuesCheck.imagenURL}
          />
          <CampoTextoModal
              name="videoURL"
              titulo="Video"
              placeholder="Ingrese el enlace del video"
              value={video.videoURL}
              onChange={onChangeInput}
              onBlur={onBlurCheckInput}
              hasError={formValuesCheck.videoURL}
          />
          <TextAModal
              name="descripcion"
              value={video.descripcion}
              onChange={onChangeInput}
              onBlur={onBlurCheckInput}
              hasError={formValuesCheck.descripcion}
          />
          <BotonCerrar
              type='button'
              onClick={() => {
                closeModal()
                resetForm()
              }}>X
          </BotonCerrar>
          <BotonesContenedor>
            <BotonEditar
                type='button'
                onClick={() => resetForm()}>
              LIMPIAR
            </BotonEditar>
            <BotonEditar>GUARDAR</BotonEditar>
          </BotonesContenedor>
        </FormEstilizado>
      </ContadorEstilizado>
    </DialogEstilizado>
  </Overlay>) : <></>
};

export default ModalEditar;