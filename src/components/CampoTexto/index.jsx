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
    padding: 15px;
    height: 20px;
    width: 600px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;
`

const CampoTexto = ({hasError, titulo, ...props}) => (
    <Frame>
      <Label>{titulo}</Label>
      <InteractuarTexto
          className={hasError ? 'invalid' : 'valid'}
          {...props}
      />
      <div>
        {hasError ? <p className="error-message">Campo obligatorio</p> : <> </>}
      </div>
    </Frame>
)


export default CampoTexto