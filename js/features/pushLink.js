import React from 'react'
import { dispatchPush } from 'repileux'

export default ({
    dest,
    children
}) => <a onClick={e => {
    e.preventDefault();
    dispatchPush(dest);
}}
    href={dest}
    className="text-link">
        {children}
    </a>