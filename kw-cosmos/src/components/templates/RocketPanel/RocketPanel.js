import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { RocketAnimation } from '../../molecules/RocketAnimation/RocketAnimation';
import { CenterRow, PlanetWrapper, Wrapper } from './RocketPanel.styles'
import planet from '../../../assets/images/planet.png'

export function RocketPanel(){
    return (
        <Wrapper>
            <CenterRow>
                <RocketAnimation></RocketAnimation>
            </CenterRow>
            <PlanetWrapper>
                <img src={planet} alt="" width="375px"/>
            </PlanetWrapper>
            <Button></Button>
        </Wrapper>
    );
};