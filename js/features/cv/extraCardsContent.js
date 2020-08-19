import React from 'react'
import SkillCard from './skillCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools'
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain'
import celtaLogo from './icons/cambridge-celta.png'

export default () =>
    <div className="skill-card-group row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 rows-cols-xxl-3">
        <SkillCard
            title="Cambridge CELTA"
            subTitle="English teaching certification"
            iconSrc={celtaLogo} />
        <SkillCard
            title="Making"
            subTitle="Car mechanics and robotics"
            icon={<FontAwesomeIcon icon={faTools} className="fa-lg" />} />
        <SkillCard
            title="The Outdoors"
            subTitle="Hiking, camping, running and all things outdoors"
            icon={<FontAwesomeIcon icon={faMountain} className="fa-lg" />} />
    </div>