import styled from "styled-components";

export const ModalWrapper = styled.div`
    background-color: ${({theme})=>theme.colors.modal};
    width: 540px;
    height: 360px;
    border-radius: 16px;
    padding: 20px 24px 24px;

    display: flex;
    flex-direction: column;
`;