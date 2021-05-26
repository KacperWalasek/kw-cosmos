import React, { useContext, useEffect } from 'react'
import { ListContext } from '../../../providers/ListProvider';
import { BodyWrapper, ListItem } from './TableBody.styles';

export function TableBody(){
    const { list, loading, loadList } = useContext(ListContext)
    useEffect(()=>{
        loadList()
    }, [])
    return (
        <BodyWrapper>
            {
                loading?
                    "Loading..."
                :
                    list.map(item=>(
                        <ListItem key={item}> {item} </ListItem>
                    ))
            }
        </BodyWrapper>
    );
} 