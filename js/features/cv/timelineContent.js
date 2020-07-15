import React from 'react'

import Timeline from './timeline'
import TimelineItem from './timelineItem'
import Text from '../../text'

export default () => <Timeline>
    <TimelineItem
        {...Text.freelance}
    />
    <TimelineItem
        {...Text.timeOff}
    />
    <TimelineItem
        {...Text.alfa}
    />
    <TimelineItem
        date="2016"
        title="Anderson Group, Luton"
        subTitle="C# developer"
        isMinor
    />
    <TimelineItem
        {...Text.colombia}
    />
    <TimelineItem
        date="2014"
        title="Z-Cars Engineering, London"
        subTitle="Apprentice mechanic"
        isMinor
    />
    <TimelineItem
        {...Text.imperial}
    />
</Timeline>