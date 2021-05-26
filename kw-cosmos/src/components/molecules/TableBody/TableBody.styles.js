import styled from "styled-components";

export const BodyWrapper = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 16px;

    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 4px;
        background-color: ${({theme})=>theme.colors.scrollbar.background};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${({theme})=>theme.colors.scrollbar.thumb};
        border-radius: 8px;
    }
`;