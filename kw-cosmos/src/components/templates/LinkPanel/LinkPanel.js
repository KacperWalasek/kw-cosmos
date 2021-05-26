import React from 'react';
import {Link} from '../../atoms/Link/Link'
import {linkData} from './linkData'
import {Wrapper} from './LinkPanel.styles'

export function LinkPanel({setModal}){
    return (
        <Wrapper>
            {Object.values(linkData).map(link=>(
                <Link key={link.title} source={link.img} title={link.title} onClick={()=>setModal(link)}/>
            ))}
        </Wrapper>
    );
};