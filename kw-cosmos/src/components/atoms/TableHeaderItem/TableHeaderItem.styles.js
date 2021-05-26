import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;  
    border-radius: inherit; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({active, theme})=>active?theme.colors.tableHeaderActive : 'transparent'};
    & div{
        display: ${({active})=>active?'block':'none'};
    }
    &:hover{
        & div{
            display: block;
        }
    }
`; 