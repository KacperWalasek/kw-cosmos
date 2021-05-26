import React from 'react'
import { HeaderWrapper } from './Header.styles';
import logo from '../../../assets/images/logo.png'
export function Header(){
    return (
        <HeaderWrapper>
            <img src={logo} alt="Usertive" width="116px"/>
        </HeaderWrapper>
    )
}