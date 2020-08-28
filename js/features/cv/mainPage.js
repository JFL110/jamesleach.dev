import React from 'react'

import HeadInfo from './headInfo'
import TimelineContent from './timelineContent'
import SkillCardContent from './skillCardContent'
import ExtraCardsContent from './extraCardsContent'

import MapCard from './mapCard'
import WebCanvasCard from './webCanvasCard'

import Text from '../../text'

const MainPage = () => {

    return <main >
        <div className="left-placeholder" />
        <div className="left left-desktop">
            <HeadInfo />
        </div>
        <div className="left top-mobile">
            <HeadInfo />
        </div>
        <div className="right">
            <div className="intro-section">
                {Text.webIntro}
            </div>

            <h2 className="section-heading">Technologies</h2>
            <SkillCardContent />

            <h2 className="section-heading">Timeline</h2>
            <TimelineContent />

            <h2 className="section-heading">Hobbies & Extras</h2>
            <ExtraCardsContent />

            <h2 className="section-heading"><a name="demos">Demo Projects</a></h2>
            <WebCanvasCard />
            <MapCard />
        </div >
    </main >
};

export default {
    page: <MainPage />,
}