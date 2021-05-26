import styled from "styled-components";

export const HeaderWrapper = styled.div`
    border-radius: 4px;
    background-color: ${({theme})=>theme.colors.tableHeader};
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: stretch;
`;