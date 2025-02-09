import React, { Suspense } from 'react'
import Loading from '../loading'
const MiniCanvas = React.lazy(() => import('./miniCanvas'));

export const miniCanvasPlaceholder = <Loading className="full-height" />;
export default () => <Suspense fallback={miniCanvasPlaceholder}>
    <MiniCanvas />
</Suspense>