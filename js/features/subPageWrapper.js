import React from 'react'
import { Container, Row } from 'react-bootstrap';
import PushLink from './pushLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight'

import './subPage.scss'

export default ({ children }) =>
    <main>
        <div className="outer-wrapper">
            <div>
                <Container>
                    <Row>
                        <div className="sub-page-breadcrumb">
                            <span>
                                <PushLink dest='./'>
                                    <FontAwesomeIcon icon={faHome} /> jamesleach.dev
                                </PushLink>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faLongArrowAltRight} />
                            </span>
                        </div>
                    </Row>
                    {children}
                </Container>
            </div>
        </div>
    </main>