import styled from "styled-components";

export const Animation = styled.div`
    position: fixed;
    animation: ${({state})=>state===0? 'flight 20s 1': ''};
    @keyframes flight{
        0%{
            transform: translate(0,0);
        }
        3%{
            transform: translate(0,0);
            animation-timing-function: ease-in;
        }
        8%{
            transform: translate(0, -300px);
            animation-timing-function: linear;
        }
        9%{
            transform: translate(0, -300px) rotate(-100deg);
            animation-timing-function: linear;
        }
        15%{
            transform: translate(-700px, -300px) rotate(-120deg);
            animation-timing-function: linear;
        }
        20%{
            transform: translate(-1400px,200px) rotate(-150deg);
            animation-timing-function: linear;
        }
        21%{
            transform: translate(-900px,2000px) rotate(10deg);
            animation-timing-function: linear;
        }
        30%{
            transform: translate(-700px, -300px) rotate(10deg);
            animation-timing-function: linear;
        }
        31%{
            transform: translate(1000px, -1000px) rotate(-100deg);
            animation-timing-function: linear;
        }
        42%{
            transform: translate(1000px, 300px) rotate(-95deg);
            animation-timing-function: linear;
        }
        55%{
            transform: translate(-1800px, 200px) rotate(-95deg);
            animation-timing-function: linear;
        }
        70%{
            transform: translate(-500px, 1000px) rotate(15deg);
            animation-timing-function: ease-out;
        }
        80%{
            transform: translate(-10px, -200px) rotate(0deg);
            animation-timing-function: ease-in-out;
        }
        85%{
            transform: translate(0, -50px) rotate(0deg);
            animation-timing-function: ease-out;
        }
        100%{
            transform: translate(0,0);
        }
    };
    & .smoke{
        animation: ${({state})=>state===0? 'smoge 20s 1': ''};
        opacity: 0;
    }
    @keyframes smoge{
        0%{
            opacity: .2;
        }
        5%{
            opacity: .9;
        }
        8%{
            opacity: 0;
        }
        80%{
            opacity: 0;
        }
        95%{
            opacity: .9;
        }
        100%{
            opacity: 0;
        }
    }
    & .legs{
        animation: ${({state})=>state===0? 'legs 20s 1': ''};
        opacity: 1;
    }
    @keyframes legs{
        0%{
            opacity: 1;
            transform: translate(0,0);
        }
        3%{
            opacity: 1;
            transform: translate(0,0);
        }
        14%{
            opacity: 1;
            transform: translate(0,-50px) scale(.1);
        }
        15%{
            opacity: 0;
        }
        80%{
            opacity: 0;
        }
        89%{
            opacity: 0;
            transform: translate(0,-50px) scale(.1);
        }
        90%{
            opacity: 1;
            transform: translate(0,-50px) scale(.1);;
        }
        100%{
            opacity: 1;
            transform: translate(0,0);
        }
    }
`;