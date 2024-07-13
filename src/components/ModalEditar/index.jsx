import styled from "styled-components"
import CampoTextoModal from "../CampoTextoModal"
import OpcionesModal from "../OpcionesModal"
import TextAModal from "../TextAModal"

const Overlay = styled.div`
    background-color: rgba( 0, 0, 0. .7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogoEstilizado = styled.dialog`
    position: absolute;
    top: 110px;
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FormEstilizado = styled.form`
    padding: 0;
`

const TituloModalEstilizado = styled.h2`
    font-size: 50px;
    margin: 10px 0;
`


const ModalEditar = () => {
    return <>
        <Overlay/>
            <DialogoEstilizado open= {true}>
                    <FormEstilizado method="dialog">
                        <TituloModalEstilizado>EDITAR CARD:</TituloModalEstilizado>
                        <CampoTextoModal
                           titulo="Título"
                           placeholder="Ingrese el título"
                           required
                        />
                        <OpcionesModal></OpcionesModal>
                        <CampoTextoModal
                            titulo="Imagen"
                            placeholder="Ingrese el enlace de la imagen"
                            required
                        />
                        <CampoTextoModal
                            titulo="Video"
                            placeholder="Ingrese el enlace del video"
                            required
                        />
                        <TextAModal></TextAModal>
                        <button>OK</button>
                    </FormEstilizado>
            </DialogoEstilizado>
    </>
}

export default ModalEditar
