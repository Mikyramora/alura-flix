import styled from "styled-components"
import {useState} from "react";

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
    padding: 15px;
    height: 20px;
    width: 600px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
`

const CampoTexto = ({hasError, titulo, ...props}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
  };

  const isInvalid = (isTouched && !props.value) || hasError

  return <Frame>
    <Label>{titulo}</Label>
    <InteractuarTexto
        onBlur={handleBlur}
        className={isInvalid ? 'invalid' : 'valid'}
        {...props}
    />
    <div>
      {isInvalid ? <p className="error-message">Campo obligatorio</p> : <> </>}
    </div>
  </Frame>
}

export default CampoTexto