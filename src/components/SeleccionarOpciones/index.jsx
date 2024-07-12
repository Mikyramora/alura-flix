import styled from "styled-components"
<<<<<<< HEAD
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import {useEffect} from "react";
=======
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585


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

const Select = styled.select`
    border: aliceblue;
    padding: 10px;
    outline-color: black;
    height: 51px;
    width: 630px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
    color: aliceblue;
`

const SeleccionarOpciones = () => {
<<<<<<< HEAD
  const {findAllCategories, categories} = useAluraFlixContext()

  useEffect(() => {
    findAllCategories()
  }, []);

  return <Frame>
    <Label>Categorías</Label>
    <Select>
      {
        categories.map(
            category => <option key={category.id}>{category.description}</option>)
      }
    </Select>

  </Frame>
=======


    const estilos = [
        "Realista",
        "Dotwork",
        "Japonés"
    ]

    return <Frame>
        <Label>Categorías</Label>
        <Select>
            {estilos.map ((estilo, index) => <option key={index}>{estilo}</option>)}
        </Select>
        
    </Frame>
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
}

export default SeleccionarOpciones