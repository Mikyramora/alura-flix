import styled from "styled-components"

const CleanStyled = styled.button`
    width: 188px;
    height: 55px;
    border-radius: 15px;
    background-color: #1e235d;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    align-content: center;
    color: aliceblue;
    margin-right: 5px;
    padding: 10px;
    border-color: aliceblue;
    cursor: pointer;
`



const CleanButton = (props) => {
    return <CleanStyled>{props.texto}</CleanStyled>
}

export default CleanButton