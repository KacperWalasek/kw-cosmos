import React from 'react';
import { ListModal } from '../../organisms/ListModal/ListModal';
import { PanelWrapper } from './ListPanel.styles';

export function ListPanel(){
    return (
        <PanelWrapper>
            <ListModal title="capsules"></ListModal>
        </PanelWrapper>
    );
};