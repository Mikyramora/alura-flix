import styled from "styled-components"
import {useAluraFlixContext} from "../../contex/AluraFlixContext.jsx";
import {useEffect} from "react";


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
    padding: 10px;
    outline-color: black;
    height: 51px;
    width: 630px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
`

const SeleccionarOpciones = ({hasError, ...props}) => {
  const {findAllCategories, categories} = useAluraFlixContext()

  useEffect(() => {
    findAllCategories()
  }, []);

  return <Frame>
    <Label>Categorías</Label>
    <Select
        {...props}
        className={hasError ? 'invalid' : 'valid'}>
      <option value="" defaultValue disabled>Selecciona una categoría</option>
      {
        categories.map(({id, description}) => (
            <option key={id} value={description}>{description}</option>
        ))
      }
    </Select>
    <div>
      {hasError ? <p className="error-message">Campo obligatorio</p> : <> </>}
    </div>
  </Frame>
}

export default SeleccionarOpciones