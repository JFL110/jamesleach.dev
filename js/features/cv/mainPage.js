import React from 'react'

import HeadInfo from './headInfo'
import TimelineContent from './timelineContent'
import SkillCardContent from './skillCardContent'
import ExtraCardsContent from './extraCardsContent'

import MapCard from './mapCard'
import WebCanvasCard from './webCanvasCard'

import Text from '../../text'

const MainPage = ({ includeMap = false }) => {

    return <main >
        <div className="left-placeholder" />
        <div className="left left-desktop">
            <HeadInfo />
        </div>
        <div className="left top-mobile">
            <HeadInfo />
        </div>
        <div className="right">
            <h1 className="desktop-heading">I am...</h1>
            <div className="intro-section">
                {Text.webIntro}
            </div>

            <h2 className="section-heading">Technologies</h2>
            <SkillCardContent />

            <h2 className="section-heading">Timeline</h2>
            <TimelineContent />

            <h2 className="section-heading">Hobbies & Extras</h2>
            <ExtraCardsContent />

            <h2 className="section-heading">Demo Project</h2>
            <WebCanvasCard />
            <MapCard includeMap={includeMap}/>
        </div>
    </main >
};

export default {
    page: <MainPage includeMap />,
    pageNoMap: <MainPage />
}