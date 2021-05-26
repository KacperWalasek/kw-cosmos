import React from 'react';
import { ListWindow } from '../../organisms/ListWindow.js/ListWindow';
import { PanelWrapper } from './ListPanel.styles';

export function ListPanel(){
    return (
        <PanelWrapper>
            <ListWindow title="capsules"></ListWindow>
        </PanelWrapper>
    );
};