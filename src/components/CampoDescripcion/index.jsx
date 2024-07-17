import styled from "styled-components"

const Frame = styled.div`
    border: none;
    margin: 24px 0 0 63px;
    width: 700px;
    height: 28vh;
    gap: 50px 0 0 0;

    @media (max-width:1420px){
      margin: 24px 0 0 54px;
    }

    @media (max-width:1420px){
      width: 79vw;
    }

    @media (max-width:600px){
      margin: 24px 0 0 44px;
    }

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

const DescripcionUsuario = styled.textarea`
    width: 31vw;
    height: 200px;
    gap: 10px;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    background-color: #173b5c;

    @media (max-width:1420px){
      width: 76vw;
    }

    @media (max-width:600px){
      width: 64vw;
    }

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