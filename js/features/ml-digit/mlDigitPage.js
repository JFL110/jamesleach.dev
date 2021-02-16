import React, { Suspense } from 'react'
import { createPage } from "repileux"
import Loading from '../loading'
import SubPageWrapper from '../subPageWrapper'

const MlDigitPage = React.lazy(() => import('./mlDigitComponent'));
const MlDigtPageLazy = () =>
    <Suspense fallback={<Loading pageLoader />}>
        <SubPageWrapper><MlDigitPage /></SubPageWrapper>
    </Suspense >

export default createPage({
    id: "ml-digit",
    paths: ["/ml-digit"],
    component: < MlDigtPageLazy />,
    meta: {
        title: "James Leach - Digit Recognition ML",
        description: 'Digit recognition demonstration using machine learning in Java and Deeplearning4j.'
    }
});