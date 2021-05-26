import React from 'react'
import { FooterWrapper } from './Footer.styles'

export function Footer(){
    return (
        <FooterWrapper>
            <div>
                <div className="xs-font">
                    Copyright &copy; Usertive &#38; SpaceX API
                </div>
                <div className="xs-font">
                    Recruiment Task / Summer 2021
                </div>
            </div>
        </FooterWrapper>
    )
}