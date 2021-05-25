import React from 'react'
import { ImgWrapper } from './Image.styles'

export function Image({source, width, left='0', top='0'}){
    return (
        <ImgWrapper left={left} top={top}>
            <img src={source} alt="" width={width}/>
        </ImgWrapper>
    )
}