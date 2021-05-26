import React, {useState} from 'react';
import { Button } from '../../atoms/Button/Button';
import { RocketAnimation } from '../../organisms/RocketAnimation/RocketAnimation';
import { CenterRow, PlanetWrapper, Wrapper } from './RocketPanel.styles'
import planet from '../../../assets/images/planet.png'

export function RocketPanel(){
    const [animationState, setAnimationState] = useState(1);
    return (
        <Wrapper>
            <CenterRow>
                <RocketAnimation animationState={animationState} setAnimationState={setAnimationState}></RocketAnimation>
            </CenterRow>
            <PlanetWrapper>
                <img src={planet} alt="" width="375px"/>
            </PlanetWrapper>
            <Button onClick={()=>setAnimationState(0)}></Button>
        </Wrapper>
    );
};