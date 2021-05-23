import React from 'react'
import { Gradient, TextWrapper, Wrapper } from './Link.styles'

export function Link({source, title}){
    return (
        <Wrapper source={source}>
            <TextWrapper className="m-font">
                {title}
            </TextWrapper>
        </Wrapper>
    )
}