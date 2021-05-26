import React from 'react';
import { ListHeader } from '../../atoms/list/ListHeader/ListHeader';
import { Table } from '../Table/Table';
import { ModalWrapper } from './ListModal.styles';

export function ListModal(){
    return (
        <ModalWrapper>
            <ListHeader/>
            <Table/>
        </ModalWrapper>
    );
};