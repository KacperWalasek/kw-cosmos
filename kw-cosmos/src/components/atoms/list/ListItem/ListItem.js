import React, { useContext } from 'react'
import { Wrapper } from './ListItem.styles';
export function ListItem({values}){
    return (
        <Wrapper>
            {values.slice(0,-1).map((v, i)=><div key={i}>{v}</div>)}
        </Wrapper>
    );
}