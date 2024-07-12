<<<<<<< HEAD
import {useState} from "react"
=======
import { useState } from "react"
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import SeleccionarOpciones from "../SeleccionarOpciones"
import CampoDescripcion from "../CampoDescripcion"
import SaveButton from "../BotonGuardar"
import CleanButton from "../BotonLimpiar"

const FilasFormulario = styled.figure`
<<<<<<< HEAD
    display: flex;
    flex-direction: row;
    width: 1350px;
    justify-content: space-around;
=======
  display: flex;
  flex-direction: row;
  width: 1350px;
  justify-content: space-around;
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
`

const ButtonContainer = styled.div`
    width: 450px;
    height: 55px;
    margin: 60px 49px;
    display: flex;
    justify-content: space-around;
`

const Formulario = () => {

<<<<<<< HEAD
  const [titulo, actualizarTitulo] = useState("")
  const [imagen, actualizarImagen] = useState("")
  const [video, actualizarVideo] = useState("")

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Manejar el envío")
    let datosEnviar = {
      titulo: titulo,
      imagen: imagen,
      video: video
    }
    console.log(datosEnviar);
  }

  return (
      <form onSubmit={manejarEnvio}>
        <div>
          <FilasFormulario>
            <CampoTexto
                titulo="Título"
                placeholder="Ingrese el título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}/>
            <SeleccionarOpciones/>
          </FilasFormulario>
          <FilasFormulario>
            <CampoTexto
                titulo="Imagen"
                placeholder="Ingrese el enlace de la imagen"
                required
                valor={imagen}
                actualizarValor={actualizarImagen}/>
            <CampoTexto
                titulo="Video"
                placeholder="Ingrese el enlace del video"
                required
                valor={video}
                actualizarValor={actualizarVideo}/>
          </FilasFormulario>
          <CampoDescripcion></CampoDescripcion>
          <ButtonContainer>
            <SaveButton type="submit" texto="GUARDAR"/>
            <CleanButton type="reset" texto="LIMPIAR"/>
          </ButtonContainer>

        </div>
      </form>
  )
=======
    const [titulo, actualizarTitulo] = useState ("")
    const [imagen, actualizarImagen] = useState ("")
    const [video, actualizarVideo] = useState ("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envío")
        let datosEnviar = {
            titulo: titulo, 
            imagen: imagen,
            video:video
        }
        console.log(datosEnviar);
    }

    return (
        <form onSubmit={manejarEnvio}>
            <div>
                <FilasFormulario>
                    <CampoTexto
                    titulo= "Título" 
                    placeholder= "Ingrese el título"
                    required
                    valor= {titulo} 
                    actualizarValor= {actualizarTitulo}/>
                    <SeleccionarOpciones></SeleccionarOpciones>
                </FilasFormulario>
                <FilasFormulario>
                    <CampoTexto
                    titulo= "Imagen" 
                    placeholder= "Ingrese el enlace de la imagen"
                    required
                    valor= {imagen}
                    actualizarValor={actualizarImagen} />
                    <CampoTexto
                    titulo= "Video" 
                    placeholder= "Ingrese el enlace del video"
                    required
                    valor={video}
                    actualizarValor={actualizarVideo} />
                </FilasFormulario>
                <CampoDescripcion></CampoDescripcion>
                <ButtonContainer>
                    <SaveButton type="submit" texto= "GUARDAR"/>
                    <CleanButton type="reset" texto= "LIMPIAR"/>
                </ButtonContainer>
                
            </div>
        </form>
    )
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
}

export default Formulario