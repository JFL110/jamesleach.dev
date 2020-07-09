import React from 'react'

export default ({ children }) => {
    var itemIndexCounter = 0;
    return <section className="timeline">
        <div className="container">
            {React.Children.map(children,
                c => React.cloneElement(c,
                    {
                        index: itemIndexCounter++,
                        key: itemIndexCounter
                    }))}
        </div>
    </section>
}