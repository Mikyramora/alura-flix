import styled from "styled-components"

const Frame = styled.div`
    border: none;
    margin: 24px 0 0 0;
    
`

const Label = styled.label`
    font-size: 17px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
    
    @media (max-width:1420px){
     margin-top: 0;
     font-size: 15px;
    }
`

const DescripcionUsuario = styled.textarea`
    width: 30.5vw;
    height: 20vh;
    gap: 10px;
    border: none;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    background-color: #173b5c;
    color: aliceblue;

    @media (max-width:1420px){
     font-size: 17px;
     padding: 8px;
     width: 33vw;
    }
`

const TextAModal = (props) => {
  return <Frame>
    <Label>Descripción</Label>
    <DescripcionUsuario {...props}/>
  </Frame>
}

export default TextAModal