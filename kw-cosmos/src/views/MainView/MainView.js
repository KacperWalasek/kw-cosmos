import React from 'react'
import { LinkPanel } from '../../components/templates/LinkPanel/LinkPanel'
import { RocketPanel } from '../../components/templates/RocketPanel/RocketPanel'
import { ViewWrapper } from './MainView.styles'

export function MainView(){
    return (
        <ViewWrapper>
            <LinkPanel></LinkPanel>
            <RocketPanel></RocketPanel>
        </ViewWrapper>
    )
}