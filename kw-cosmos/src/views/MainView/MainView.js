import React from 'react'
import { LinkPanel } from '../../components/templates/LinkPanel/LinkPanel'
import { ViewWrapper } from './MainView.styles'

export function MainView(){
    return (
        <ViewWrapper>
            <LinkPanel></LinkPanel>
            <LinkPanel></LinkPanel>
        </ViewWrapper>
    )
}