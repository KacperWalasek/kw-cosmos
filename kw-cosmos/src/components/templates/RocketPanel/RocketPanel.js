import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { RocketAnimation } from '../../molecules/RocketAnimation/RocketAnimation';
import { CenterRow, Wrapper } from './RocketPanel.styles'
import planet from '../../../assets/images/planet.png'

export function RocketPanel(){
    return (
        <Wrapper>
            <CenterRow>
                <RocketAnimation></RocketAnimation>
            </CenterRow>
            <img src={planet} alt="" width="375px"/>
            <Button></Button>
        </Wrapper>
    );
};