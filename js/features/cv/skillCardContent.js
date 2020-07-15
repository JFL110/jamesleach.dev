import React from 'react'
import SkillCard from './skillCard'

// Images
import awsLogo from './icons/aws.png'
import javascriptLogo from './icons/js.png'
import dynamoDbLogo from './icons/dynamo-db.png'
import gaeLogo from './icons/gae.png'
import githubActionsLogo from './icons/github-actions.png'
import htmlLogo from './icons/html.png'
import javaLogo from './icons/java.png'
import csharp from './icons/csharp.png'
import mysqlLogo from './icons/mysql.png'
import netsuiteLogo from './icons/netsuite.png'
import reactLogo from './icons/react.png'
import webpackLogo from './icons/webpack.png'

const frontEndBadge = {
    text: "front end",
    className: "front-end"
};
const backEndBadge = {
    text: "back end",
    className: "back-end"
};
const deploymentBadge = {
    text: "deployment",
    className: "deployment"
};

export default () =>
    <div className="skill-card-group row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 rows-cols-xxl-4 ">
        <SkillCard
            title="Java"
            isHighlighted
            badge={backEndBadge}
            iconSrc={javaLogo} />
        <SkillCard
            title="Javascript"
            badge={frontEndBadge}
            iconSrc={javascriptLogo} />
        <SkillCard
            title="AWS"
            badge={backEndBadge}
            iconSrc={awsLogo} />
        <SkillCard
            title="React + Redux"
            badge={frontEndBadge}
            iconSrc={reactLogo} />
        <SkillCard
            title="Webpack"
            badge={frontEndBadge}
            iconSrc={webpackLogo} />
        <SkillCard
            title="SQL"
            badge={backEndBadge}
            iconSrc={mysqlLogo} />
        <SkillCard
            title="HTML + S/CSS"
            badge={frontEndBadge}
            iconSrc={htmlLogo} />
        <SkillCard
            title="GitHub Actions"
            badge={deploymentBadge}
            iconSrc={githubActionsLogo} />
        <SkillCard
            title="NetSuite"
            badge={backEndBadge}
            iconSrc={netsuiteLogo} />
        <SkillCard
            title="Google App Engine"
            badge={backEndBadge}
            iconSrc={gaeLogo} />
        <SkillCard
            title="C#"
            badge={backEndBadge}
            iconSrc={csharp} />
        <SkillCard
            title="NoSQL"
            badge={backEndBadge}
            iconSrc={dynamoDbLogo} />
    </div>