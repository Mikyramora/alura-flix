import styled from "styled-components"

const SaveStyled = styled.button`
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
    border-color: gold;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`

const SaveButton = ({texto, ...props}) => {
  return <SaveStyled {...props} >{texto}</SaveStyled>
}

export default SaveButton