import styled from 'styled-components';

const width = 160;
const height = 208;

export const Wrapper = styled.div`
    overflow: hidden;
    border-radius: 16px;
    width: ${width + 'px'};
    height: ${height + 'px'};
    
    background: linear-gradient(360deg, #2B224A 0%, rgba(0, 0, 0, 0) 100%), 
        url(${({source})=>source});
    background-size: ${width + 'px'} ${height + 'px'};
    
    & div{
        width: fit-content;
        margin: auto;
        margin-top: 164px;
        transition: all .5s;
    }

    &:hover{
        cursor: pointer;
        background: linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%),
            url(${({source})=>source});
        background-size: ${width + 'px'} ${height + 'px'};
        
        & div{
            margin-top: 94px
        }
    }
`;

export const TextWrapper = styled.div`
    color: white;
`;
