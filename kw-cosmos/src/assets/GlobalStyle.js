import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
    }
    .xs-font{
        //styleName: 12/Regular;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.4000000059604645px;
        text-align: left;
    }
    .s-font{
        //styleName: 12/Semi Bold;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
    }
    .m-font{
        //styleName: 14/Semi Bold;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
    }
    .l-font{
        //styleName: 16/Semi Bold;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
    }
    .xl-font{
        //styleName: 24/Bold;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0px;
        text-align: left;
    }
`;