import styled from "styled-components";

export const Image = styled.img`
    max-width: 160px;
    float: left;
    margin-right: 15px;
`
export const Text = styled.div`
    font-size: 18px;
`

export const LinkWrapper = styled.div`
    display: flex;
    margin: 15px 0 0 0;
    justify-content: center;
    gap: 15px;
`

export const DeleteButton = styled.div`
    border: 1px solid black;
    background: white;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    color: black;

     &:hover {
        background: darkred;
        color: white;
        border: 1px solid darkred;
    }
`

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

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

export const ModalText = styled.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`
export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
`