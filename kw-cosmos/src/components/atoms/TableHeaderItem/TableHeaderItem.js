import React, { useContext, useEffect, useState } from 'react'
import { SortType } from '../../../utils/sortType';
import { ListContext } from '../../../providers/ListProvider';
import { Wrapper } from './TableHeaderItem.styles';
import { ArrowDown, ArrowUp, SwapVertical } from 'react-ionicons'


export function TableHeaderItem({columnIndex, title, active, activate}){
    const sortings = [
        {
            icon: (<SwapVertical/>),
            sortType: SortType.DEFAULT
        },
        {
            icon: (<ArrowUp/>),
            sortType: SortType.ASCENDING
        },
        {
            icon: (<ArrowDown/>),
            sortType: SortType.DESCENDING
        },
    
    ]
    const { sortList } = useContext(ListContext);
    const [ sortingIndex, setSortingIndex ] = useState(0);
    useEffect(()=>{
        if(!active)
            setSortingIndex(0);
    }, [active])

    const sortClick = () => {
        setSortingIndex((sortingIndex + 1) % 3);
        sortList(columnIndex, sortings[sortingIndex].sortType)
        activate();
    }

    return (
        <Wrapper active={active} onClick={sortClick}>
            <span className="m-font">{title}</span>
            <div>{sortings[sortingIndex].icon}</div>
        </Wrapper>
    );
}