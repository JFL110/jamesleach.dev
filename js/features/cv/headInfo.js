import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf'
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import printJS from 'print-js'
import Avatar from '../avatar'

// Append the current time to avoid caching
const pdfPath = './static/james-leach-cv.pdf?' + new Date().getTime();
const pdfBlackAndWhitePath = './static/james-leach-cv-bw.pdf?' + new Date().getTime();

const HeadingInfo = () => {

    const [phoneNumberShown, setPhoneNumberShown] = useState(false);

    const showPhoneNumber = e => {
        e.preventDefault();
        setPhoneNumberShown(true);
    }

    const doPrint = e => {
        e.preventDefault();
        printJS(pdfBlackAndWhitePath);
    }

    return <>
        <Avatar />
        <h1 className="name-heading">James Leach</h1>

        <h5 className="side-heading">Get in touch</h5>

        <a className="side-item-container" href="mailto:contact@jamesleach.dev"><FontAwesomeIcon icon={faEnvelope} />contact@jamesleach.dev</a>
        {phoneNumberShown ?
            <a className="side-item-container" href="tel:+44-7946-496-228"> <FontAwesomeIcon icon={faPhone} />+44 7946 496228</a> :
            <a className="side-item-container" href="blank" onClick={showPhoneNumber}> <FontAwesomeIcon icon={faPhone} />+44 **** ******</a>}
        <a className="side-item-container" target="_blank" rel="noreferrer" href="https://github.com/JFL110"> <FontAwesomeIcon icon={faGithub} />JFL110</a>

        <h5 className="side-heading">Take away</h5>

        <a className="side-item-container"
            download="james-leach-cv.pdf"
            href={pdfPath}> <FontAwesomeIcon icon={faFilePdf} />Download PDF</a>

        <a className="side-item-container"
            onClick={doPrint}
            href="#"> <FontAwesomeIcon icon={faPrint} />Print PDF</a>

    </>
}

export default HeadingInfo;