import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'

export default ({ onClick }) =>
    <div
        className="clear-button square-button clickable"
        onClick={onClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
    </div>