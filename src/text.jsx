import React from 'react'
import PushLink from './features/pushLink'

export default ({

    name: "James Leach",
    title: "Senior Full-Stack Engineer",

    imperial: {
        title: "Imperial College London",
        subTitle: "MEng. Chemical Engineering",
        date: "2010 - 14",
        content: <  >
            <p>Managed several team projects and brought software skills to the course,
                running training sessions on LaTeX markup-language and Autodesk 3D modelling software.</p>
            <p>Took on a part-time job as a mechanic in a local garage.</p>
            <p>Led the restoration of a classic Mini as Car Officer of the Imperial CGCU Motor Club.</p>
        </ >,
        pdfContent: <  >
            <p>Managed several team projects and brought software skills to the course,
                running training sessions on LaTeX markup-language and Autodesk 3D modelling software.</p>
            <p>Led the restoration of a classic Mini as Car Officer of the Imperial CGCU Motor Club.</p>
        </ >
    },

    school: {
        title: "Knights Templar School",
        content: <  >
            <p>A-Levels: Maths A*, Economics A*, Chemistry A</p>
            <p>AS-Levels: Further Maths A</p>
            <p>GCSEs: Ten A*s</p>
        </ >
    },

    alfa: {
        date: "Feb 2016 - Jan 19",
        title: "ALFA Systems, London",
        subTitle: "Software Consultant",
        content: <>
            <p>Developed, maintained and provided support for a Java-based asset-management software used by lenders across the globe.</p>
            <p>Specialised in Data Warehousing with a focus on concurrency, performance and stability.
                Improved the speed of a several-billion-record Extract Transform Load process from eight hours to less than three, using a combination
                of schema redesign, SQL query optimisation and Java transformation optimisations.
                Quickly became an authority in the area and took ownership of key developments in an agile environment.</p>
            <p>Assisted international clients on-site with SQL report writing.</p>
            <p>Oversaw proposed changes to the application&apos;s database schema, ensuring conventions were adhered to and performance issues avoided.</p>
            <p>Supervised and guided the development of junior team members.</p>
            <p>Delivered regular training sessions to experienced colleagues and new hires on Java, SQL and internal frameworks.</p>
        </>
    },

    anderson: {
        date: "Dec 2015 - Feb 16",
        title: "Anderson Group, Luton",
        subTitle: "Software Developer",
        content: <>
            <p>Took on an interim position after volunteering abroad. Developed in-house workflow systems using C# and MVC patterns.</p>
        </>
    },

    colombia: {
        date: "Dec 2014 - Dec 15",
        title: "El Ministerio de Educación, Colombia",
        subTitle: "Full-Time Volunteer English Teacher",
        content: <>
            <p>Taught classes of up to forty state-school teenagers as well as improving teachers&apos; English and course materials.</p>
            <p>Created an educational Android App to utilise previously unused tablets in the classroom using a C# content server over a local network.</p>
        </>,
        pdfContent: <>
            <p>Taught classes of up to forty state-school teenagers as well as improving teachers&apos; English and course materials.</p>
            <p>Completed a Cambridge CELTA English teaching course in preparation.</p>
            <p>Created an educational Android App to utilise previously unused tablets in the classroom using a C# content server over a local network.</p>
        </>
    },

    lumin: {
        date: "Oct 2020 - Feb 2022",
        title: "Lumin",
        subTitle: "Senior Full Stack Developer",
        content: <>
            <p>
                Developing and supporting AWS applications with a startup whose clients aid consumers in legal disputes with utility providers.
            </p>
            <p>
                Designing and implementing a restack of a Ruby-on-Rails system to Java and React using an agile and reversible approach to
                eliminate disruption to business operations.
            </p>
            <p>
                Pioneered Java technologies including Lombok and Gradle multi-project builds to remove boilerplate code and
                configuration. Created custom Gradle plugins hosted in AWS Codeartifact to define company-wide
                standards and archetypes used by multiple teams and contractors.
            </p>
            <p>
                Set up CI and CD pipelines and AWS monitoring systems including Lambdas to send alerts to Microsoft Teams.
            </p>
        </>
    },

    zephr: {
        date: "Feb 2022 - Present",
        title: "Zephr - a Zuora Company",
        subTitle: "Senior Full Stack Engineer",
        content: <>
            <p>
                Building a globally distributed, performance-intensive application that orchestrates dynamic content delivery,
                paywalls and user management for a number of well-known online publishers.
            </p>
            <p>
                Introduced new working practices to make sprints more agile and better align product and engineering teams, with
                instant improvements to velocity and feature quality.
            </p>
            <p>
                Improved code quality and product stability by automating a range of testing, development and deployment tasks.
            </p>
            <p>
                Took on team-lead roles: designing, planning and distributing feature work. Delivered a number of great features by
                managing scope and working with external stakeholders throughout the development process.
            </p>
        </>
    },

    freelance: {
        date: "Feb 2020 - Oct 2020",
        title: "Freelance",
        content: <>
            <p>Developing an educational product to produce custom worksheets and track progress for STEM subjects.</p>
            <p>Designed an AWS-hosted microservice infrastructure to manage users and content that communicates with a React front end.
                Includes a cost-optimised NoSQL schema and OAuth security.</p>
        </>
    },

    timeOff: {
        date: "Jan 2019 - Feb 20",
        title: "Building a motorhome and travelling",
        content: <>
            <p>Converted a pickup truck to a 4x4 motorhome by designing and building a fibreglass body completely from scratch.
            </p>
            <p>Take a look at the <PushLink dest='./camper'>build photos</PushLink> from the project.</p>
        </>,
        pdfContent: <>
            <p>Converted a pickup truck to a 4x4 motorhome by designing and building a fibreglass body completely from scratch.</p>
        </>
    },

    pdfIntro: <>
        <p>
            I have been developing my coding skills ever since my first website at age eleven.
            I take pride in writing clean, well-tested code and love taking on a challenge through design to implementation.
            I enjoy training others and am known for having the knowledge, approachability and practical attitude to help everyone get the job done.
        </p>
        <p>
            More details and examples of recent work can be found on my online CV.
        </p>
    </>,

    webIntro: <>
        <p>
            I have been developing my coding skills ever since my first website at age eleven.
            I take pride in writing clean, well-tested code and love taking on a challenge from design to implementation.
            I enjoy training others and am known for having the knowledge, approachability and practical attitude to help everyone get the job done.
        </p>
        <p>
            In my recent roles, I have enjoyed taking on ownership of delivery.
            I believe that an agile approach, realistic goals and involving engineers early on leads
            to features that are released on time and provide real value for clients and users.
        </p>

        <p>Take a look at some of my <a href="#demos" className="text-link">demo projects</a>.</p>

    </>,
});
