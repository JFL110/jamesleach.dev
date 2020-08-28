import React, { Suspense } from 'react'
import Loading from '../loading'
const MiniCanvas = React.lazy(() => import('./miniCanvas'));

export default () => <Suspense fallback={<Loading className="full-height" />}>
    <MiniCanvas />
</Suspense>