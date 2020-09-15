import React, { Suspense } from 'react'
import { createPage } from "repileux";
import Loading from '../loading'

const CamperPage = React.lazy(() => import('./camperPageComponet'));
const CamperPageLazy = () => <Suspense fallback={<Loading style={{ verticalAlign: 'middle', height: '100%' }} />}>
    <CamperPage />
</Suspense>

export default createPage({
    id: "camper",
    paths: ["/camper"],
    component: < CamperPageLazy />,
    meta : {
        title : "James Leach - Building a Camper",
        description : 'Build photos from our offroad camper project - converting a Toyota Hilux into a 4x4 motorhome.'
    }
});