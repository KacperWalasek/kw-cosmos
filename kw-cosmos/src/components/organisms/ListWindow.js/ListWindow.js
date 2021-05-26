import React from 'react';
import { ListProvider} from '../../../providers/ListProvider';
import { ListHeader } from '../../atoms/ListHeader/ListHeader';
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