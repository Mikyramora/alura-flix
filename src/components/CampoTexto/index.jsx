import { useState } from "react"
import styled from "styled-components"

const Frame = styled.div`
    border: none;
    margin: 24px 0;

`

const Label = styled.label`
    font-size: 23px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
`

const InteractuarTexto = styled.input`
    border: aliceblue;
    padding: 15px;
    outline-color: black;
    height: 20px;
    width: 600px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
    
`

const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <Frame>
        <Label>{props.titulo}</Label>
        <InteractuarTexto 
            placeholder={props.placeholder}
            required={props.required}
            value= {props.valor}
            onChange={manejarCambio}
        />
    </Frame>
}

export default CampoTexto