import React, { Suspense } from 'react'

const Map = React.lazy(() => import('./map'));

export default ({
    loadingComponent,
    isMiniMap = false,
}) => <Suspense fallback={loadingComponent}>
        <Map isMiniMap={isMiniMap} />
    </Suspense>