import React from 'react'

import useEventListener from '@use-it/event-listener';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';

const keyCodeRight = 39;
const keyCodeLeft = 37;

// Kept outside of react for performance
var keyPressReady = true;

const PhotoLightbox = ({
    currentLightBoxPhoto,
    setCurrentLightBoxPhoto,
    orderedPhotos,
    onChange
}) => {

    // Key presses
    useEventListener('keydown', ({ keyCode }) => {
        // Only if lightbox shown
        if (currentLightBoxPhoto == null || !keyPressReady) {
            return;
        }

        if (keyCode == keyCodeRight) {
            // Right
            setCurrentLightBoxPhoto(orderedPhotos[(currentLightBoxPhoto.index + 1) % orderedPhotos.length]);
        } else if (keyCode == keyCodeLeft) {
            // Left
            setCurrentLightBoxPhoto(orderedPhotos[(currentLightBoxPhoto.index - 1) % orderedPhotos.length]);
        }
    });

    const onModalClose = () => setCurrentLightBoxPhoto(null);

    return <Modal
        show={currentLightBoxPhoto != null}
        onHide={onModalClose}
        keyboard={false}
        dialogClassName='modal-content-only'
        centered
    >
        <AwesomeSlider
            bullets={false}
            selected={currentLightBoxPhoto?.index}
            onTransitionStart={() => keyPressReady = false}
            onTransitionEnd={lb => {
                keyPressReady = true;
                (lb.currentIndex != currentLightBoxPhoto?.index) && onChange(orderedPhotos[lb.currentIndex])
            }}
        >
            {orderedPhotos.map(photo => <div key={photo.index} data-src={photo.url} />)}
        </AwesomeSlider>
    </Modal>
}

export default PhotoLightbox