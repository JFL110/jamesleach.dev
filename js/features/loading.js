import React from 'react'
import classNames from 'classnames'

export default ({
    className = "",
    pageLoader = false,
    style = {}
}) => <div className={classNames("loading-container ", className, pageLoader && "page-loader")} style={style}>
        <div>
            <div>
                <div className="loader" />
            </div>
        </div>
    </div>