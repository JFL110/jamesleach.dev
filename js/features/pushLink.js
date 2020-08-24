import React from 'react'
import Frame from './frame'

export default ({
    dest,
    children
}) => <a onClick={e => {
    e.preventDefault();
    Frame.dispatchPush(dest);
}}
    href={dest}
    className="text-link">
        {children}
    </a>