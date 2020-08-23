import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf'
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import printJS from 'print-js'

import avatarImage from '../../images/8-small.jpeg'
import avatarImageNano from '../../images/8-nano.png'
import avatarImageWebp from '../../images/8-small.webp.jpeg'
import { checkWebPSupport } from 'supports-webp-sync'

// Append the current time to avoid caching
const pdfPath = './static/james-leach-cv.pdf?' + new Date().getTime();
const pdfBlackAndWhitePath = './static/james-leach-cv-bw.pdf?' + new Date().getTime();

export default () => {

    const doPrint = e => {
        e.preventDefault();
        printJS(pdfBlackAndWhitePath);
    }

    const avatarUrl = checkWebPSupport() ? avatarImageWebp : avatarImage;

    const [avatarImageLoaded, setAvatarImageLoaded] = useState(false);
    if (!avatarImageLoaded) {
        const imageLoader = new Image();
        imageLoader.src = avatarUrl;
        imageLoader.onload = () =>   setAvatarImageLoaded(true);
    }

    return <React.Fragment>
        <div className="avatar" style={{
            backgroundImage: `url('${avatarImageLoaded ? avatarUrl : avatarImageNano}')`
        }} />
        <h1 className="name-heading">James Leach</h1>
        <h4 className="title-heading">Full stack developer</h4>

        <h5 className="side-heading">Get in touch</h5>

        <a className="side-item-container" href="mailto:contact@jamesleach.dev"><FontAwesomeIcon icon={faEnvelope} />contact@jamesleach.dev</a>
        <a className="side-item-container" href="tel:+447-946-496-228"> <FontAwesomeIcon icon={faPhone} />+447 946 496 228</a>
        <a className="side-item-container" target="_blank" rel="noreferrer" href="https://github.com/JFL110"> <FontAwesomeIcon icon={faGithub} />JFL110</a>

        <h5 className="side-heading">Take away</h5>

        <a className="side-item-container"
            download="james-leach-cv.pdf"
            href={pdfPath}> <FontAwesomeIcon icon={faFilePdf} />Download PDF</a>

        <a className="side-item-container"
            onClick={doPrint}
            href="#"> <FontAwesomeIcon icon={faPrint} />Print PDF</a>

    </React.Fragment>
}