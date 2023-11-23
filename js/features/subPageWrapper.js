import React, { useState } from 'react'
import Avatar from './avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import SubPageNav from './subPageNav';

export default ({ children, noPadding = false, tableCell = true }) => {
    const [navOpen, setNavOpen] = useState(false)
    const toggleMenu = () => {
        setNavOpen(!navOpen);
    }

    return (
        <main>
            <div className="left-placeholder" />
            <div className="left left-desktop">
                <Avatar />
                <h1 className="name-heading">James Leach</h1>
                <br />
                <br />
                <SubPageNav />
            </div>
            <div className="left top-mobile top-mobile-subpage">
                <div>
                    <Avatar small />
                    <div>
                        <h1 className="name-heading">James Leach</h1>
                        <div className="mobile-nav-icon-container">
                            <FontAwesomeIcon
                                size="2x"
                                className={classNames("mobile-nav-icon", navOpen && 'mobile-nav-open-icon')}
                                icon={faCircleChevronDown}
                                onClick={toggleMenu}
                            />
                        </div>
                    </div>
                </div>
                <div className={classNames('mobile-nav-menu', !navOpen && 'mobile-nav-menu-hidden')}>
                    <SubPageNav mobile />
                </div>
            </div>
            <div className={classNames('right', noPadding && 'no-padding', tableCell && 'right-table-cell')}>
                {children}
            </div>
        </main>)
}