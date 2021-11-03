import React from 'react'
import PushLink from './features/pushLink'

export default ({

    name: "James Leach",
    title: "Full-stack Java developer",

    imperial: {
        title: "Imperial College London",
        subTitle: "MEng. Chemical Engineering",
        date: "2010 - 14",
        content: < React.Fragment >
            <p>Managed several team projects and brought software skills to the course,
running training sessions on LaTeX markup-language and Autodesk 3D modelling software.</p>
            <p>Took on a part-time job as a mechanic in a local garage.</p>
            <p>Led the restoration of a classic Mini as Car Officer of the Imperial CGCU Motor Club.</p>
        </React.Fragment >,
        pdfContent: < React.Fragment >
            <p>Managed several team projects and brought software skills to the course,
running training sessions on LaTeX markup-language and Autodesk 3D modelling software.</p>
            <p>Led the restoration of a classic Mini as Car Officer of the Imperial CGCU Motor Club.</p>
        </React.Fragment >
    },

    school: {
        title: "Knights Templar School",
        content: < React.Fragment >
            <p>A-Levels: Maths A*, Economics A*, Chemistry A</p>
            <p>AS-Levels: Further Maths A</p>
            <p>GCSEs: Ten A*s</p>
        </React.Fragment >
    },

    alfa: {
        date: "Feb 2016 - Jan 19",
        title: "ALFA Systems, London",
        subTitle: "Software Consultant",
        content: <React.Fragment>
            <p>Developed, maintained and provided support for a Java-based asset-management software used by lenders across the globe.</p>
            <p>Specialised in Data Warehousing with a focus on concurrency, performance and stability.
            Improved the speed of a several-billion-record Extract Transform Load process from eight hours to less than three, using a combination
            of schema redesign, SQL query optimisation and Java transformation optimisations.
                Quickly became an authority in the area and took ownership of key developments in an agile environment.</p>
            <p>Assisted international clients on-site with SQL report writing.</p>
            <p>Oversaw proposed changes to the application&apos;s database schema, ensuring conventions were adhered to and performance issues avoided.</p>
            <p>Supervised and guided the development of junior team members.</p>
            <p>Delivered regular training sessions to experienced colleagues and new hires on Java, SQL and internal frameworks.</p>
        </React.Fragment>
    },

    anderson: {
        date: "Dec 2015 - Feb 16",
        title: "Anderson Group, Luton",
        subTitle: "Software Developer",
        content: <React.Fragment>
            <p>Took on an interim position after volunteering abroad. Developed in-house workflow systems using C# and MVC patterns.</p>
        </React.Fragment>
    },

    colombia: {
        date: "Dec 2014 - Dec 15",
        title: "El Ministerio de Educación, Colombia",
        subTitle: "Full-Time Volunteer English Teacher",
        content: <React.Fragment>
            <p>Taught classes of up to forty state-school teenagers as well as improving teachers&apos; English and course materials.</p>
            <p>Created an educational Android App to utilise previously unused tablets in the classroom using a C# content server over a local network.</p>
        </React.Fragment>,
        pdfContent: <React.Fragment>
         <p>Taught classes of up to forty state-school teenagers as well as improving teachers&apos; English and course materials.</p>
         <p>Completed a Cambridge CELTA English teaching course in preparation.</p>
         <p>Created an educational Android App to utilise previously unused tablets in the classroom using a C# content server over a local network.</p>
      </React.Fragment>
    },

    lumin : {
        date: "Oct 2020 - Present",
        title: "Lumin",
        subTitle: "Senior Full Stack Developer",
        content : <React.Fragment>
            <p>
               Developing and supporting AWS applications with a startup whose clients aid consumers in legal disputes with utility providers.
            </p>
            <p>
               Designing and implementing a restack of a Ruby-on Rails system to Java and React using an agile and reversible approach to
               eliminate disruption to business operations.
            </p>
            <p>
                Pioneered Java technologies including Lombok and Gradle multi-project builds to remove boilerplate code and
                configuration. Created custom Gradle plugins hosted in AWS Codeartifact to define company-wide
                standards and archetypes used by multiple teams and contractors.
            </p>
            <p>
                Setup CI and CD pipelines and AWS monitoring systems including Lambdas to send alerts to Microsoft Teams.
            </p>
    </React.Fragment>
    },

    freelance: {
        date: "Feb 2020 - Oct 2020",
        title: "Freelance",
        content : <React.Fragment>
            <p>Developing an educational product to produce custom worksheets and track progress for STEM subjects.</p>
            <p>Designed an AWS-hosted microservice infrastructure to manage users and content that communicates with a React front end.
                Includes a cost-optimised NoSQL schema and OAuth security.</p>
    </React.Fragment>
    },


    timeOff: {
        date: "Jan 2019 - Feb 20",
        title: "Building a motorhome and travelling",
        content: <React.Fragment>
            <p>Converted a pickup truck to a 4x4 motorhome by designing and building a fibreglass body completely from scratch.
            </p>
            <p>Take a look at the <PushLink dest='./camper'>build photos</PushLink> from the project.</p>
        </React.Fragment>,
        pdfContent: <React.Fragment>
            <p>Converted a pickup truck to a 4x4 motorhome by designing and building a fibreglass body completely from scratch.</p>
        </React.Fragment>
    },

    pdfIntro: <React.Fragment>
            <p>
                I have been developing my coding skills ever since my first website at age eleven.
                I take pride in writing clean, well-tested code and love taking on a challenge through design to implementation.
                I enjoy training others and am known for having the knowledge, approachability and practical attitude to help everyone get the job done.
            </p>
            <p>
                More details and examples of recent work can be found on my online CV.
            </p>
        </React.Fragment>,

    webIntro: <React.Fragment>
        <p>
            I have been developing my coding skills ever since my first website at age eleven.
            I take pride in writing clean, well-tested code and love taking on a challenge through design to implementation.
            I enjoy training others and am known for having the knowledge, approachability and practical attitude to help everyone get the job done.
        </p>

        <p>Recent professional projects range from educational platforms to financial administration systems used to
        manage millions of contracts across the globe.

        In the latter, I specialised in Java and SQL based Extract Transform Load processes handling gigabytes of financial data in real time.
        I advanced the framework, trained and supervised developers to use it, and so cut the time to create new features.

        I also improved throughput and stability by optimising queries, database structure and tackling concurrency based issues.

        During my time on the project, both client satisfaction and sales of new enhancements greatly improved.
        </p>

        <p>Take a look at some of my <a href="#demos" className="text-link">demo projects</a>.</p>

    </React.Fragment>,
});
