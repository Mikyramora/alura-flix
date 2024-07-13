import styled from "styled-components"
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import {useEffect} from "react";


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

const Select = styled.select`
    border: aliceblue;
    padding: 3px 8px;
    outline-color: black;
    height: 36px;
    width: 620px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 17px;
    color: aliceblue;
`

const OpcionesModal = (props) => {
  const {findAllCategories, categories} = useAluraFlixContext()

  useEffect(() => {
    findAllCategories()
  }, []);

  return <Frame>
    <Label>Categorías</Label>
    <Select {...props}>
      {
        categories.map(
            category => <option key={category.id}>{category.description}</option>)
      }
    </Select>
  </Frame>
}

export default OpcionesModal