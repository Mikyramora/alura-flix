import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import styled from "styled-components";
import CampoTextoModal from "../CampoTextoModal/index.jsx";
import OpcionesModal from "../OpcionesModal/index.jsx";
import TextAModal from "../TextAModal/index.jsx";

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
`;

const DialogEstilizado = styled.div`
    position: relative;
    width: 45%;
    height: 80%;
    margin: auto;
    background-color: #03122F;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
`

const TituloModalEstilizado = styled.h2`
    font-size: 50px;
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
    top: 10px;
    right: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;

    &:hover {
        background-color: #d32f2f;
    }
`;


const BotonLimpiar = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;

const BotonGuardar = styled.button`
    background-color: #4CAF50; /* Verde */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const BotonesContenedor = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const ModalEditar = () => {
  const {toggleModal, clean, closeModal, video, onChangeInput, onSubmitForm} = useAluraFlixContext()


  return toggleModal ? (<Overlay>
    <DialogEstilizado>
      <ContadorEstilizado>
        <FormEstilizado onSubmit={(e) => {
          e.preventDefault()
          onSubmitForm(true)
        }}>
          <TituloModalEstilizado>EDITAR CARD:</TituloModalEstilizado>
          <CampoTextoModal
              name="titulo"
              onChange={onChangeInput}
              titulo="Título"
              placeholder="Ingrese el título"
              value={video.titulo}
              required
          />
          <OpcionesModal
              name="categoria"
              onChange={onChangeInput}
              value={video.categoria}
          />
          <CampoTextoModal
              name="imagenURL"
              onChange={onChangeInput}
              titulo="Imagen"
              placeholder="Ingrese el enlace de la imagen"
              value={video.imagenURL}
              required
          />
          <CampoTextoModal
              name="videoURL"
              onChange={onChangeInput}
              titulo="Video"
              placeholder="Ingrese el enlace del video"
              value={video.videoURL}
              required
          />
          <TextAModal
              name="descripcion"
              onChange={onChangeInput}
              value={video.descripcion}
          />
          <BotonCerrar onClick={() => {
            closeModal()
          }}>X
          </BotonCerrar>
          <BotonesContenedor>
            <BotonLimpiar onClick={() => clean()}>Limpiar</BotonLimpiar>
            <BotonGuardar>Guardar</BotonGuardar>
          </BotonesContenedor>
        </FormEstilizado>
      </ContadorEstilizado>
    </DialogEstilizado>
  </Overlay>) : <></>
};

export default ModalEditar;