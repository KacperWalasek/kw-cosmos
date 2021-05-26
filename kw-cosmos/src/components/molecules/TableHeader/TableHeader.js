import React from 'react'
import { HeaderWrapper } from './TableHeadere.styles';
import {TableHeaderItem} from '../../atoms/TableHeaderItem/TableHeaderItem'
export function TableHeader({title}){
    return (
        <HeaderWrapper>
            <TableHeaderItem title="Type" active></TableHeaderItem>
            <TableHeaderItem title="Status"></TableHeaderItem>
        </HeaderWrapper>
    );
}