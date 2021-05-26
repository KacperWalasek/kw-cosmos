import React, { useState } from 'react';
import { getList } from '../utils/api';
import { SortType } from '../utils/sortType';

export const ListContext = React.createContext({
    title: "",
    loading: false,
    list: [],
    tableTitles: ['',''],
    loadList: () => {},
    sortList: () => {},
    closeModal: () => {}
});

export function ListProvider({children, modalData, closeModal}){
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    const loadList = ()=>{
        setLoading(true)
        getList(modalData)
        .then(result=>{
            setList(result);
            setLoading(false)
        });
    }
    const sortList = (columnIndex, sortType)=>{
        let newList;
        switch(sortType){
            case SortType.ASCENDING:
                newList = list.sort((a, b)=>a[columnIndex] > b[columnIndex]? 1: -1);
                break;
            case SortType.DESCENDING:
                newList = list.sort((a, b)=>a[columnIndex] < b[columnIndex]? 1: -1)  
                break;
            case SortType.DEFAULT:
                // Original order indexes are in the last column
                const indexingColum = list[0]?.length - 1;
                newList = list.sort((a, b)=> a[indexingColum] - b[indexingColum]);
                break;
            default:
                return;
        }
        setList([...newList]);
    }
    return(
        <ListContext.Provider value={{
            title: modalData.title,
            loading,
            list,
            loadList,
            sortList,
            tableTitles: modalData.tableTitles,
            closeModal
        }}>
            {children}
        </ListContext.Provider>
    )
} 