import Formulario from "../components/Formulario"
import styled from "styled-components"


const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    min-height: 90%;
    margin: 0 0 0 95px;
    max-width: 90%;
    padding: 30px 0;
    color: aliceblue;
    
    @media (max-width: 1600px){
        width: 100%;
        margin: auto;
    }
`
const TituloPrincipal = styled.h1`
    font-size: 3.5em;
    margin-bottom: 0;

    @media (max-width:1420px){
      font-size: 2.5em;
    }
`

const Instrucciones = styled.h2`
    font-weight: 300;
    font-size: 1.1em;

    @media (max-width:1420px){
      font-size: 1em;
    }
`

const TituloFormulario = styled.h3`
    font-weight: 300;
    font-size: 1.8em;
    width: 68.5vw;
    border-width: 1px;
    border-style: solid none solid none;
    border-color: gold;
    padding: 30px 0 ;
    margin: 15px 0 0 0;
    text-align: left;

    @media (max-width:1600px){
        width: 80vw;
    }

    @media (max-width: 1040px){
        font-size: 1.5em;
    }
`

const Nuevo = () => {
    return <section>
        <ContainerFormulario>
            <TituloPrincipal>NUEVO VIDEO</TituloPrincipal>
            <Instrucciones>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</Instrucciones>
            <TituloFormulario>Crear Tarjeta</TituloFormulario>
            <Formulario/>
        </ContainerFormulario>
    </section>
}

export default Nuevo