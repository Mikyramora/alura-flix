import styled from "styled-components"

const Overlay = styled.div`
    background-color: rgba( 0, 0, 0. .7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogoEstilizado = styled.dialog`
    position: absolute;
    top: 200px;
    width: 50%;
    height: 60%;

`


const ModalEditar = () => {
    return <>
        <Overlay/>
            <DialogoEstilizado open= {true}>
                <h2>EDITAR CARD:</h2>
                <div>
                    <form method="dialog">
                        <button>OK</button>
                    </form>
                </div>
            </DialogoEstilizado>
    </>
}

export default ModalEditar
