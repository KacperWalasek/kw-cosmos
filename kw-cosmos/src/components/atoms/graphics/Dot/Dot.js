import styled from "styled-components";

export const Dot = styled.div`
    position: absolute;
    background-color: ${({color, theme})=>theme.colors.dots[color]};
    width: 8px;
    height: 8px;
    border-radius: 4px;
    
    left: ${({left})=>left};
    top: ${({top})=>top};
`;
