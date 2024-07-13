import styled from "styled-components"

const Frame = styled.div`
    border: none;
    margin: 24px 0 0 0;
    width: 600px;
    height: 260px;
    gap: 40px 0 0 0;
`

const Label = styled.label`
    font-size: 17px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
`

const DescripcionUsuario = styled.textarea`
    width: 590px;
    height: 200px;
    gap: 10px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    background-color: #173b5c;
    color: aliceblue;
`

const TextAModal = () => {
    return<Frame>
        <Label>Descripción</Label>
        <DescripcionUsuario placeholder="¿De qué se trata éste video?" required/>
    </Frame>
}

export default TextAModal