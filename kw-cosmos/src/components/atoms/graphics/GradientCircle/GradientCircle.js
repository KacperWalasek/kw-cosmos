import React from 'react';
import { InnerCircle, OuterCircle } from './GradientCircle.styles';

export function GradientCircle(params){
    return (
        <OuterCircle {...params}>
            <InnerCircle {...params}/>
        </OuterCircle>
    )
}