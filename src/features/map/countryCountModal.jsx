import React from 'react'
import { Modal } from 'react-bootstrap';
import './countryCountModal.scss';

const CountryCountModal = ({ show, onModalClose }) => <>
    <Modal
        show={show}
        onHide={onModalClose}
        keyboard={false}
        dialogClassName='country-count-modal'
        centered
    >
        <div>
            Hello
        </div>
    </Modal>
</>

export default CountryCountModal;