import styled from "styled-components"

const FailEstilizado = styled.main`
background: url(/img/OutOfOrder.png) no-repeat center center;
background-size: cover;
height: 700px;
padding: 20px 0;
display: flex;
justify-content: space-between;
`

const TextoErrorEstilizado = styled.p`
    font-size: 6em;
    font-weight: 900;
    background-color: #09bae1;
    text-align: center;
    width: 920px;
    padding: 10px;
    height: 110px;
    margin: 182px 0 200px 949px;
    border-radius: 15px;
`

const Page404 = () => {
    return(
        <FailEstilizado>
            <TextoErrorEstilizado>Ésta página no existe</TextoErrorEstilizado>
        </FailEstilizado>
    )
}

export default Page404