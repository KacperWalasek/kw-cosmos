import styled from 'styled-components'

export const ImgWrapper = styled.div`
    position: absolute;
    transform: translate(-50%,-50%);
    left: ${({left})=>left};
    top: ${({top})=>top};
`;