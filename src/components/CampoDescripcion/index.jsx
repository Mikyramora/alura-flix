import styled from "styled-components"
import {useState} from "react";

const Frame = styled.div`
    border: none;
    margin: 24px 0 0 63px;
    width: 700px;
    height: 260px;
    gap: 50px 0 0 0;
`

const Label = styled.label`
    font-size: 23px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
`

const DescripcionUsuario = styled.textarea`
    width: 600px;
    height: 200px;
    gap: 10px;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    background-color: #173b5c;
`

const CampoDescripcion = ({hasError, ...props}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
  };

  const isInvalid = (isTouched && !props.value) || hasError

  return <Frame>
    <Label>Descripción</Label>
    <DescripcionUsuario
        onBlur={handleBlur}
        className={isInvalid ? 'invalid' : 'valid'}
        {...props}/>
  </Frame>
}

export default CampoDescripcion