import React, { useContext, useState } from 'react'
import { HeaderWrapper } from './TableHeadere.styles';
import { TableHeaderItem } from '../../atoms/TableHeaderItem/TableHeaderItem'
import { ListContext } from '../../../providers/ListProvider';
export function TableHeader(){
    const { tableTitles } = useContext(ListContext);
    const [ activeItem, setActiveItem ] = useState(0);
    return (
        <HeaderWrapper>
            {tableTitles.map((title, index)=>(
                <TableHeaderItem 
                    title={title} 
                    columnIndex={index} 
                    active={index === activeItem}
                    activate={() => setActiveItem(index)}
                />
            ))}
        </HeaderWrapper>
    );
}