import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import printJS from 'print-js'

// Append the current time to avoid caching
const pdfPath = './static/james-leach-cv.pdf?' + new Date().getTime();
const pdfBlackAndWhitePath = './static/james-leach-cv-bw.pdf?' + new Date().getTime();

export default () => {

    const doPrint = () => printJS(pdfBlackAndWhitePath);
    return <React.Fragment>
        <div className="avatar" />
        <h1 className="name-heading">James Leach</h1>
        <h4 className="title-heading">Full stack developer</h4>

        <h5 className="side-heading">Get in touch</h5>

        <a className="side-item-container" href="mailto:contact@jamesleach.dev"><FontAwesomeIcon icon={faEnvelope} />contact@jamesleach.dev</a>
        <a className="side-item-container" href="tel:+44-946-496-228"> <FontAwesomeIcon icon={faPhone} />+44 946 496 228</a>
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