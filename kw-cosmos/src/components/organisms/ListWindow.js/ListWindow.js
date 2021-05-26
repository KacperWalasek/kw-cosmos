import React from 'react';
import { ListHeader } from '../../atoms/list/ListHeader/ListHeader';
import { Table } from '../Table/Table';
import { WindowWrapper } from './ListWindow.styles';

export function ListWindow(){
    return (
        <WindowWrapper>
            <ListHeader/>
            <Table/>
        </WindowWrapper>
    );
};