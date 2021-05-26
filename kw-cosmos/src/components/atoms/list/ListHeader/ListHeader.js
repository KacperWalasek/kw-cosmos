import React, { useContext } from 'react'
import { CloseButtonWrapper, HeaderWrapper } from './ListHeader.styles';
import {ListContext} from './../../../../providers/ListProvider'
import { Close } from 'react-ionicons'
export function ListHeader(){
    const { title, closeModal } = useContext(ListContext)
    return (
        <HeaderWrapper>
            <span>{title}</span>
            <CloseButtonWrapper onClick={closeModal}>
                <Close color="white" height="27px" width="27px"/>
            </CloseButtonWrapper>
        </HeaderWrapper>
    );
}