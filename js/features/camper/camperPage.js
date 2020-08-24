import React, { useState } from 'react'
import PushLink from '../pushLink'
import galleryImages from './camperImagesSrc'
import imageInfo from './camperImageInfo'
import ToggleButton from 'react-toggle-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight'
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-awesome-slider/src/core/styles.scss';

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// Images
import camperBefore from './camperImages/truck-before.jpg'
import camperBeforeNano from './camperImages/truck-before.nano.jpg'

import camperAfter from './camperImages/truck-after-2.jpg'
import camperAfterNano from './camperImages/truck-after-2.nano.jpg'

// Styles
import "./camperStyles.scss"
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'

const loadedImageMarkers = {};

const MainImage = ({ image, caption, className, onClick }) =>
    <div className={className}>
        <LazyImage image={image} onClick={onClick} />
        <br />{caption}
    </div>

const LazyImage = ({ image, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(loadedImageMarkers[image.src] === true);

    if (!isLoaded) {
        const imageLoader = new Image();
        imageLoader.src = image.src;

        imageLoader.onload = () => {
            setIsLoaded(true);
            loadedImageMarkers[image.src] = true;
        };
    }

    return <div
        className={"div-image " + (onClick == null ? "" : "clickable")}
        onClick={onClick}
        style={{ backgroundImage: "url('" + (isLoaded ? image.src : image.nano) + "')" }} />
}

const BuildImage = ({ image, onClick }) => <div className="col build-image-col">
    <LazyImage image={image} onClick={onClick} />
</div>

const sortedImages =
    [
        {
            src: camperBefore,
            nano: camperBeforeNano,
            highlight: true
        }, {
            src: camperAfter,
            nano: camperAfterNano,
            highlight: true
        }
    ].concat(
        galleryImages
            .sort((a, b) => a.name.localeCompare(b.name)))
        .map(e => {
            const info = imageInfo[e.name];
            return {
                ...e,
                highlight: e.highlight || (info?.highlight ?? false)
            };
        });

export default () => {

    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelecedImage] = useState(null);

    const filteredImages = sortedImages.filter(i => showAll || i.highlight);

    return <main className="camper-main">
        <div>
            <div className="camper-breadcrumb">
                <span>
                    <PushLink dest='./'>
                        <FontAwesomeIcon icon={faHome} /> home
                        </PushLink>
                </span>
                <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
            </div>

            <h1 className="main-heading">Building a Camper</h1>

            <p>
                In 2019, Cara and I converted a 2004 Toyota Hilux into an 4x4 camper.
                Partly we were looking for a challenge, and partly we wanted a vehicle that could be lived in,
                could go almost anywhere and that didn&apos;t cost a fortune.
            </p>
            <p>
                We took off the back and replaced it with a body built from handmade fibreglass composite panels that we designed with CAD.

                Inside we created a cosy interior with all the comforts of home including central heating, running water and cooking facilities.
                Outside we reinforced the suspension and brakes and gave the truck some mechanical TLC.

                It was a gruelling task but the end result is a truly unique home away from home which can go where others can&apos;t.
            </p>

            <p>You can take a look at some of the places we&apos;ve been <PushLink dest='./where-are-they'>on this map</PushLink>.</p>

            {(selectedImage !== null) && <Lightbox
                mainSrc={filteredImages[selectedImage].src}
                nextSrc={filteredImages[(selectedImage + 1) % filteredImages.length].src}
                prevSrc={filteredImages[(selectedImage + filteredImages.length - 1) % filteredImages.length].src}
                onCloseRequest={() => setSelecedImage(null)}
                onMovePrevRequest={() => setSelecedImage((selectedImage + filteredImages.length - 1) % filteredImages.length)}
                onMoveNextRequest={() => setSelecedImage((selectedImage + 1) % filteredImages.length)}
            />}

            <div className="before-after-container">
                <MainImage image={filteredImages[0]}
                    caption="Before"
                    className="left-image"
                    onClick={() => setSelecedImage(0)} />
                <MainImage image={filteredImages[1]} caption="After"
                    className="right-image"
                    onClick={() => setSelecedImage(1)} />
            </div>

            <h1 className="camper-section-heading">Build photos</h1>

            <div className="highlights-button-container">
                <span>Show highlights only: </span>
                <div><ToggleButton
                    inactiveLabel={''}
                    activeLabel={''}
                    colors={{
                        activeThumb: {
                            base: 'rgb(250,250,250)',
                        },
                        inactiveThumb: {
                            base: 'rgb(62,130,247)',
                        },
                        active: {
                            base: 'rgb(207,221,245)',
                            hover: 'rgb(177, 191, 215)',
                        },
                        inactive: {
                            base: 'rgb(65,66,68)',
                            hover: 'rgb(95,96,98)',
                        }
                    }}
                    value={!showAll}
                    onToggle={() => setShowAll(!showAll)} />
                </div>
            </div>
            <div className="build-image-container row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 rows-cols-xxl-4 ">
                {filteredImages
                    .filter((_, i) => i >= 2)
                    .map((i, index) => <BuildImage
                        image={i}
                        key={index}
                        onClick={() => setSelecedImage(index + 2)} />)}
            </div>
        </div>
    </main>
}
