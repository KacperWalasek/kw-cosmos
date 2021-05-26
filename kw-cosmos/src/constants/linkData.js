import crew from '../assets/images/crew.png'
import starlink from '../assets/images/details.png'
import rockets from '../assets/images/rockets.png'
import capsules from '../assets/images/capsules.png'

export const linkData = {
    rockets: {
        title: 'Rockets',
        img: rockets,
        url: '/rockets',
        getArrayFromResult: rocket => rocket.name,
    },
    crew: {
        title: 'Crew',
        img: crew,
        url: '/crew',
        getArrayFromResult: member => member.name,
    },
    capsules: {
        title: 'Capsules',
        img: capsules,
        url: '/capsules',
        getArrayFromResult: capsule => capsule.type,
    },
    starlink: {
        title: 'Starlink',
        img: starlink,
        url: '/starlink',
        getArrayFromResult: starlink => starlink.spaceTrack.OBJECT_NAME,
    }
}