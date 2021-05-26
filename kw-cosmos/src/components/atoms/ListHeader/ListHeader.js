import React, { useContext } from 'react'
import { HeaderWrapper } from './ListHeader.styles';
import {ListContext} from './../../../providers/ListProvider'
export function ListHeader(){
    const { title, closeModal } = useContext(ListContext)
    return (
        <HeaderWrapper>
            <span >{title}</span>
            <div onClick={closeModal}>x</div>
        </HeaderWrapper>
    );
}