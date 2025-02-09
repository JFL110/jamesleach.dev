import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const showMoreCutoffIndex = 3;

export default ({ children }) => {
    const [showMore, setShowMore] = useState(false);

    return <>
        <section className="timeline">
            <div className="container">
                {children.slice(0, showMore ? children.length : showMoreCutoffIndex).map(
                    (child, index) => React.cloneElement(child,
                        {
                            index: index,
                            key: index
                        }))}
            </div>
        </section>
        <div
            className="timeline-expander-container"
            onClick={(e) => {
                e.preventDefault();
                setShowMore(!showMore);
            }}>
            {showMore ?
                <>
                    <FontAwesomeIcon size="lg" icon={faChevronUp} /> <h4>
                        Show less
                    </h4>
                </> :
                <>
                    <h4>
                        Show more
                    </h4>
                    <FontAwesomeIcon size="lg" icon={faChevronDown} />
                </>}
        </div>
    </>
}