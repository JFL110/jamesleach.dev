import React, { useState } from 'react'
import avatarImage from '../images/8-small.jpeg'
import avatarImageNano from '../images/8-nano.png'
import avatarImageWebp from '../images/8-small.webp.jpeg'
import { checkWebPSupport } from 'supports-webp-sync'
import classNames from 'classnames'

const Avatar = ({ small = false }) => {
    const avatarUrl = checkWebPSupport() ? avatarImageWebp : avatarImage;

    const [avatarImageLoaded, setAvatarImageLoaded] = useState(false);
    if (!avatarImageLoaded) {
        const imageLoader = new Image();
        imageLoader.src = avatarUrl;
        imageLoader.onload = () => setAvatarImageLoaded(true);
    }
    return <div className={classNames('avatar', small && 'avatar-small')} style={{
        backgroundImage: `url('${avatarImageLoaded ? avatarUrl : avatarImageNano}')`
    }} />
}

export default Avatar;