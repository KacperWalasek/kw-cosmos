import React from 'react'
import { Wrapper } from './TableHeaderItem.styles';

export function TableHeaderItem({title, active}){
    return (
        <Wrapper active={active}>
            <span>{title}</span>
            <div>a</div>
        </Wrapper>
    );
}