import styled from "styled-components";

export const OuterCircle = styled.div`
    position: absolute;
    left: ${({left})=>left};
    top: ${({top})=>top};
    width: ${({diameter})=>diameter};
    height: ${({diameter})=>diameter};
    border-radius: ${({diameter})=>parseInt(diameter)/2 + 'px'};
    background: linear-gradient(180deg, #2B2347 0%, #221B3A 100%);
`;
export const InnerCircle = styled.div`
    position: relative;
    left: ${({diameter})=>parseInt(diameter)/6+'px'};
    top: ${({diameter})=>parseInt(diameter)/6+'px'};
    width: ${({diameter})=>parseInt(diameter)*2/3+'px'};
    height: ${({diameter})=>parseInt(diameter)*2/3+'px'};
    border-radius: ${({diameter})=>parseInt(diameter)/3 + 'px'};
    background-color: ${({theme})=>theme.colors.background};
`;