import React, { Suspense } from 'react'
import Loading from '../loading'

const CamperPage = React.lazy(() => import('./camperPage'));

export default () => <Suspense fallback={  <Loading style={{ verticalAlign: 'middle', height: '100%' }} />}>
    <CamperPage />
</Suspense>