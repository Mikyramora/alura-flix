import Formulario from "../components/Formulario"
import styled from "styled-components"


const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 80%;
    margin: 0 0 0 95px;
    max-width: 90%;
    padding: 30px 0;
    color: aliceblue;
    background-color: black;
`
const TituloPrincipal = styled.h1`
    font-size: 3.5em;
    margin-bottom: 0;
`

const Instrucciones = styled.h2`
    font-weight: 300;
    font-size: 1.1em;
`

const TituloFormulario = styled.h3`
    font-weight: 300;
    font-size: 1.8em;
    margin: 15px 0 0 -1200px;
    background-color: blue;
`





const Nuevo = () => {
    return <section>
        <ContainerFormulario>
            <TituloPrincipal>NUEVO VIDEO</TituloPrincipal>
            <Instrucciones>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</Instrucciones>
            <TituloFormulario>Crear Tarjeta</TituloFormulario>

        </ContainerFormulario>
    </section>
}

export default Nuevo