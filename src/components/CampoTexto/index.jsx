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
    
    @media (max-width:1420px){
      font-size: 18px;
    }
`

const InteractuarTexto = styled.input`
    padding: 15px;
    height: 20px;
    width: 600px;
    border-radius: 10px;
    background-color: #143757;
    font-size: 20px;

    @media (max-width:1600px){
        width: 36vw;
    }

    @media (max-width:600px){
        width: 65vw;
    }
    
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