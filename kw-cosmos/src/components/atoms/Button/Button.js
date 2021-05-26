import React from 'react'
import { ButtonWrapper } from './Button.styles'

export function Button(params){
    return (
        <ButtonWrapper className="l-font" {...params}>
            Lunch Rocket!
        </ButtonWrapper>
    )
}