import styled from "styled-components"

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

  return <Frame>
    <Label>Descripción</Label>
    <DescripcionUsuario
        className={hasError ? 'invalid' : 'valid'}
        {...props}/>
    <div>
      {hasError ? <p className="error-message">Campo obligatorio</p> : <> </>}
    </div>
  </Frame>
}

export default CampoDescripcion