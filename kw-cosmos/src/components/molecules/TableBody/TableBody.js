import React, { useContext, useEffect } from 'react'
import { ListContext } from '../../../providers/ListProvider';
import { BodyWrapper } from './TableBody.styles';
import {ListItem} from '../../atoms/ListItem/ListItem'
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
                        <ListItem key={item[item.length-1]} values={item}></ListItem>
                    ))
            }
        </BodyWrapper>
    );
} 