import styled from "styled-components"

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border: 1px solid black;
    border-radius: 10px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: white;
`