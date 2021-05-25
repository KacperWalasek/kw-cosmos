import React from 'react';
import rocket from '../../../assets/images/rocket.png'
import legs from '../../../assets/images/legs.png'
import smoke1 from '../../../assets/images/smoke1.png'
import smoke2 from '../../../assets/images/smoke2.png'
import { AnimationWrapper } from './RocketAnimation.styles';
import { Image } from '../../atoms/Image/Image'
export function RocketAnimation(){
    return(
        <AnimationWrapper>
            <Image source={legs} width="68px" top="66px"/>
            <Image source={smoke1} width="52px" left="60px" top="50px"/>
            <Image source={smoke2} width="65px" left="-67px" top="43px"/>
            <Image source={rocket} width="102px" />
        </AnimationWrapper>
    )
}