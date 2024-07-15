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
`

const DialogEstilizado = styled.div`
    position: relative;
    width: 45%;
    height: 87%;
    margin: auto;
    background-color: #03122F;
    border-radius: 17px;

    @media (max-width:1420px){
     width: 52vw;
     height: 90vh;
    }
`

const TituloModalEstilizado = styled.h2`
    font-size: 50px;
    border-width: 3px;
    border-style: solid none solid none;
    border-color: gold;

    @media (max-width:1420px){
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

    @media (max-width:1420px){
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

    @media (max-width:1420px){
     font-size: 15px;
     width: 9vw;
     padding: 8px 0;
    }
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
            <BotonEditar onClick={() => clean()}>LIMPIAR</BotonEditar>
            <BotonEditar>GUARDAR</BotonEditar>
          </BotonesContenedor>
        </FormEstilizado>
      </ContadorEstilizado>
    </DialogEstilizado>
  </Overlay>) : <></>
};

export default ModalEditar;