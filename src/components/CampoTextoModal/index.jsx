import {useState} from "react"
import styled from "styled-components"

const Frame = styled.div`
    border: none;
    margin: 24px 0;

`

const Label = styled.label`
    font-size: 17px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
`

const InteractuarTexto = styled.input`
    border: aliceblue;
    padding: 10px;
    height: 15px;
    width: 600px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
    color: aliceblue;

`

const CampoTextoModal = ({titulo, ...props}) => {
  return <Frame>
    <Label>{titulo}</Label>
    <InteractuarTexto
        {...props}
    />
  </Frame>
}

export default CampoTextoModal