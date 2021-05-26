import crew from '../assets/images/crew.png'
import starlink from '../assets/images/details.png'
import rockets from '../assets/images/rockets.png'
import capsules from '../assets/images/capsules.png'

export const linkData = {
    rockets: {
        title: 'Rockets',
        img: rockets,
        url: '/rockets',
        tableTitles: ["Name", "Active"],
        getArrayFromResult: rocket => [rocket.name, rocket.active? "Yes": "No"],
    },
    crew: {
        title: 'Crew',
        img: crew,
        url: '/crew',
        tableTitles: ["Name", "Status"],
        getArrayFromResult: member => [member.name, member.status],
    },
    capsules: {
        title: 'Capsules',
        img: capsules,
        url: '/capsules',
        tableTitles: ["Type", "Status"],
        getArrayFromResult: capsule => [capsule.type, capsule.status],
    },
    starlink: {
        title: 'Starlink',
        img: starlink,
        url: '/starlink',
        tableTitles: ["Name", "Version"],
        getArrayFromResult: starlink => [starlink.spaceTrack.OBJECT_NAME, starlink.version],
    }
}