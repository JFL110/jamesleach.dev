import React from 'react'

export default (
    { className = "" }
) => <div className={"loading-container " + className}>
        <div>
            <div>
                <div className="loader" />
            </div>
        </div>
    </div>