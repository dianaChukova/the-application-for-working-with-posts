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