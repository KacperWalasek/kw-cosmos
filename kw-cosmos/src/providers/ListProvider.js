import React, { useState } from 'react';
import { getList } from '../api/getListFunctions';

const defaultValue = {
    title: "",
    loading: false,
    list: [],
    loadList: () => {},
    sortList: () => {},
    closeModal: () => {}
}

export const ListContext = React.createContext(defaultValue);

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
    return(
        <ListContext.Provider value={{
            title: modalData.title,
            loading,
            list,
            loadList,
            sortList: () => {},
            closeModal
        }}>
            {children}
        </ListContext.Provider>
    )
} 