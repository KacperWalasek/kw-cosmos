import React from 'react';
import rocket from '../../../assets/images/rocket.png'
import smoke1 from '../../../assets/images/smoke1.png'
import smoke2 from '../../../assets/images/smoke2.png'
import legs from '../../../assets/images/legs.png'
import { Animation } from './RocketAnimation.styles';
import { Image } from '../../atoms/Image/Image'

export function RocketAnimation({animationState, setAnimationState}){
    return(
        <Animation state={animationState} onAnimationEnd={()=>setAnimationState(1)}>
            <div className="legs">
                <Image source={legs} width="68px" top="66px"/>
            </div>
            <div className="smoke">
                <Image source={smoke1} width="52px" left="60px" top="50px"/>
                <Image source={smoke2} width="65px" left="-67px" top="43px"/> 
            </div>
            <Image source={rocket} width="102px" />
        </Animation>
    )
}