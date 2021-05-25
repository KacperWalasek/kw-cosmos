import styled from "styled-components";

export const ButtonWrapper = styled.button`
    width: fit-content; 
    background-color: ${({theme})=>theme.colors.button};
    padding: 12px 32px;
    border: none;
    border-radius: 8px;
    transition: all .3s;
    &:hover{
        background-color: ${({theme})=>theme.colors.buttonHover};
        cursor: pointer;
    }
`;