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

    @media (max-width: 1420px) {
        margin-top: 0;
        font-size: 15px;
    }
`

const Select = styled.select`
    border: aliceblue;
    padding: 3px 8px;
    height: 36px;
    width: 32vw;
    border-radius: 10px;
    background-color: #143757;
    font-size: 17px;
    color: aliceblue;

    @media (max-width: 1420px) {
        font-size: 17px;
        padding: 3px 6px;
        width: 34.3vw;
        height: 4vh;
        margin: 0;
    }

    @media (max-width: 1040px) {
        width: 46.7vw;
        height: 3vh;
    }
`

const OpcionesModal = ({hasError, ...props}) => {
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
        categories.map(
            category => <option key={category.id}>{category.description}</option>)
      }
    </Select>
    <div>
      {hasError ? <p className="error-message">Campo obligatorio</p> : <> </>}
    </div>
  </Frame>
}

export default OpcionesModal