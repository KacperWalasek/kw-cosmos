import React, { useState } from 'react'
import { Background } from '../../components/templates/BackgroundShapes.js/Background'
import { LinkPanel } from '../../components/templates/LinkPanel/LinkPanel'
import { ListPanel } from '../../components/templates/ListPanel/ListPanel'
import { RocketPanel } from '../../components/templates/RocketPanel/RocketPanel'
import { ListProvider } from '../../providers/ListProvider'
import { ViewWrapper } from './MainView.styles'

export function MainView(){
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState({})
    const setModal = data=>{
        setShowModal(true);
        setModalData(data);
    }
    return (
        <Background>
            <ViewWrapper>
                <LinkPanel setModal={setModal}></LinkPanel>
                <RocketPanel></RocketPanel>
                {showModal? 
                    <ListProvider modalData={modalData} closeModal={()=>setShowModal(false)}>
                        <ListPanel></ListPanel>
                    </ListProvider>
                :null}
            </ViewWrapper>
        </Background>
    )
}