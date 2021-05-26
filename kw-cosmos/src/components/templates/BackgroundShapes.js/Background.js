import React from 'react';
import { GradientCircle } from '../../atoms/graphics/GradientCircle/GradientCircle';
import { Dot } from '../../atoms/graphics/Dot/Dot';
import { BackgroundShapes, BackgroundWrapper } from './Background.styles';

export function Background({children}){
    return (
        <BackgroundWrapper>
            <BackgroundShapes>
                <GradientCircle diameter="346px" left="34%" top="-27%"/>
                <GradientCircle diameter="346px" left="86%" top="14%"/>
                <GradientCircle diameter="346px" left="-12%" top="42%"/>
                <Dot color="red" top="144px" left="81px"/>
                <Dot color="red" top="552px" left="1259px"/>
                <Dot color="green" top="84px" left="875px"/>
                <Dot color="purple" top="660px" left="652px"/>
            </BackgroundShapes>
            {children}
        </BackgroundWrapper>
    )
} 