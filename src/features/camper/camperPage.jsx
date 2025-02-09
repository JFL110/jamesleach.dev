import React, { Suspense } from 'react'
import { createPage } from "repileux";
import Loading from '../loading'
import SubPageWrapper from '../subPageWrapper'
import '../../common.scss'

const CamperPage = React.lazy(() => import('./camperPageComponent'));
const CamperPageLazy = () => <Suspense fallback={<Loading pageLoader />}>
    <SubPageWrapper><CamperPage /></SubPageWrapper>
</Suspense>

export default createPage({
    id: "camper",
    paths: ["/camper"],
    component: <CamperPageLazy />,
    meta: {
        title: "James Leach - Building a Camper",
        description: 'Build photos from our offroad camper project - converting a Toyota Hilux into a 4x4 motorhome.'
    }
});