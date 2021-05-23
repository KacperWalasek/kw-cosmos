import React from 'react';
import crew from '../../../assets/images/crew.png'
import details from '../../../assets/images/details.png'
import rockets from '../../../assets/images/rockets.png'
import capsules from '../../../assets/images/capsules.png'
import {Link} from '../../atoms/Link/Link'
import {Wrapper} from './LinkPanel.styles'

export function LinkPanel(){
    return (
        <Wrapper>
            <Link source={capsules} title="Capsules"></Link>
            <Link source={crew} title="Crew"></Link>
            <Link source={rockets} title="Rockets"></Link>
            <Link source={details} title="Details"></Link>
        </Wrapper>
    );
};