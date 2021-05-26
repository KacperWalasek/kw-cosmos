import React from 'react'
import { TextWrapper, Wrapper } from './Link.styles'

export function Link({source, title, onClick}){
    return (
        <Wrapper source={source} onClick={onClick}>
            <TextWrapper className="m-font">
                {title}
            </TextWrapper>
        </Wrapper>
    )
}