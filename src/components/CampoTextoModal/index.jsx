import {useState} from "react"
import styled from "styled-components"

const Frame = styled.div`
    border: none;
    margin: 24px 0;

    @media (max-width:1420px){
     margin: 10px 0;
    }
`

const Label = styled.label`
    font-size: 17px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;

    @media (max-width:1420px){
     margin-top: 0;
     font-size: 15px;
    }
`

const InteractuarTexto = styled.input`
    border: aliceblue;
    padding: 10px;
    height: 15px;
    width: 31vw;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
    color: aliceblue;

    @media (max-width:1420px){
     font-size: 17px;
     padding: 8px;
     width: 33vw;
    }

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