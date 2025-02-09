import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faGlobeAsia, faMicrochip, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    {
        href: '/',
        icon: faAddressBook,
        label: 'Résumé',
    },
    {
        href: '/ml-digit',
        icon: faMicrochip,
        label: 'Machine Learning',
    },
    {
        href: '/travel-map',
        icon: faGlobeAsia,
        label: 'Travel Map',
    },
    {
        href: 'http://d1kzdlgex69htr.cloudfront.net/random',
        icon: faPaintBrush,
        label: 'Websocket Canvas',
        newTab: true,
    }
]
const SubPageNav = ({ mobile = false }) => navItems.map(({ href, icon, label, newTab }) => (
    <a
        key={href}
        className={mobile ? '' : 'side-item-container'}
        href={href}
        {...(newTab ? {
            rel: "noreferrer noopener",
            target: "_blank"
        } : {})}
    >
        <FontAwesomeIcon icon={icon} />
        {mobile && <br />}
        {label}
    </a >))

export default SubPageNav;