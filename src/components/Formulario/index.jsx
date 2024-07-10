import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import SeleccionarOpciones from "../SeleccionarOpciones"
import CampoDescripcion from "../CampoDescripcion"
import SaveButton from "../BotonGuardar"
import CleanButton from "../BotonLimpiar"

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
    return (
        <form>
            <div>
                <FilasFormulario>
                    <CampoTexto
                    titulo= "Título" 
                    placeholder= "Ingrese el título" />
                    <SeleccionarOpciones></SeleccionarOpciones>
                </FilasFormulario>
                <FilasFormulario>
                    <CampoTexto
                    titulo= "Imagen" 
                    placeholder= "Ingrese el enlace de la imagen" />
                    <CampoTexto
                    titulo= "Video" 
                    placeholder= "Ingrese el enlace del video" />
                </FilasFormulario>
                <CampoDescripcion></CampoDescripcion>
                <ButtonContainer>
                    <SaveButton type= "submit" texto= "GUARDAR"/>
                    <CleanButton type= "reset" texto= "LIMPIAR"/>
                </ButtonContainer>
                
            </div>
        </form>
    )
}

export default Formulario