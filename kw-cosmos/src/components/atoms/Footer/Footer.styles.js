import styled from "styled-components";

export const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 24px;
    & > div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        & div{
            color: ${({theme})=> theme.colors.footerFont};
        }
    }
`;