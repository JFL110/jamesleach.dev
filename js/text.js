import React from 'react'
import PushLink from './features/pushLink'

export default ({

    name: "James Leach",
    title: "Full stack developer",

    imperial: {
        title: "Imperial College London",
        subTitle: "MEng. Chemical Engineering",
        date: "2010 - 14",
        content: < React.Fragment >
            <p>Managed a number of team projects and brought software skills to the course,
running training sessions on LaTeX markup-language and Autodesk 3D modeling software.</p>
            <p>Took on a part-time job as a mechanic in a local garage.</p>
            <p>Led the restoration of a classic Mini as Car Officer of the Imperial CGCU Motor Club.</p>
        </React.Fragment >,
        pdfContent: < React.Fragment >
            <p>Managed a number of team projects and brought software skills to the course,
running training sessions on LaTeX markup-language and Autodesk 3D modeling software.</p>
            <p>Led the restoration of a classic Mini as Car Officer of the Imperial CGCU Motor Club.</p>
        </React.Fragment >
    },

    alfa: {
        date: "2016 - 19",
        title: "ALFA Systems, London",
        subTitle: "Software Consultant",
        content: <React.Fragment>
            <p>Developed, maintained and provided support for a Java-based asset-management software used by lenders across the globe.</p>
            <p>Specialised in Business Intelligence with a focus on concurrency, performance and stability.
            Improved the speed of a several-billion-record Extract Transform Load process from eight hours to less than three.
                Quickly became an authority in the area and took ownership of key developments..</p>
            <p>Conceived and built a number of tools to aid developers and support teams.</p>
            <p>Assisted international clients on-site with SQL report writing.</p>
            <p>Delivered regular training sessions to experienced colleagues and new hires on Java, SQL and internal frameworks.</p>
        </React.Fragment>
    },

    colombia: {
        date: "2015 - 16",
        title: "El Ministerio de Educación, Colombia",
        subTitle: "Full-Time Volunteer English Teacher",
        content: <React.Fragment>
            <p>Taught classes of up to forty state-school teenagers as well as improving teachers' English and course materials.</p>
            <p>Created an educational App to utilise previously unused tablets in the classroom.</p>
        </React.Fragment>,
        pdfContent: <React.Fragment>
            <p>Taught classes of up to forty state-school teenagers as well as improving teachers' English and course materials.</p>
          <p>Created an educational App to utilise previously unused tablets in the classroom.</p>
          <p>Completed a Cambridge CELTA English teaching course in preparation.</p>
      </React.Fragment>
    },

    freelance: {
        date: "2020 - present",
        title: "Freelance",
        content: <React.Fragment>
            <p>Independently developing an educational product to produce customisable worksheets for STEM subjects.
            The project involves creation of a web interface, backend user management system and an API for other developers to add content.</p>
            <hr />
            <p>Adding custom functionality to Oracle NetSuite and building integrations for a consultancy.</p>
        </React.Fragment>
    },

    freelancePdf: {
        date: "2020 - present",
        title: "Freelance",
        content: <React.Fragment>
            <p>Independently developing an educational product to produce custom worksheets for STEM subjects.
            The project involves creation of a web interface, backend user management system and an API for developers to add content.</p>
            <p>Adding custom functionality to Oracle NetSuite and building integrations for a consultancy.</p>
        </React.Fragment>
    },


    timeOff: {
        date: "2019 - 20",
        title: "Building a motorhome and travelling",
        content: <React.Fragment>
            <p>Converted a pickup truck to a 4x4 motorhome by designing and building a fibreglass body completely from scratch.
            </p>
            <p>Take a look at the <PushLink dest='./camper'>build photos</PushLink> from the project.</p>
        </React.Fragment>,
        pdfContent: <React.Fragment>
            <p>Converted a pickup truck to a 4x4 motorhome by designing and building a fibreglass body completely from scratch.
            </p>
        </React.Fragment>
    },

    pdfIntro: <React.Fragment>
            <p>
            Beginning with my first website at age eleven, I have been coding for over 17 years. 
           In this time I&apos;ve learnt to write clean, well-tested and performant code and to identify problems before they happen.
           I am known for approachability, great quality work and creating tooling that makes life better for the whole team.
            </p><p>
                More details and examples of recent work can be found on my online CV.
            </p>
        </React.Fragment>,

    webIntro: <React.Fragment>
        <p>Beginning with my first website at age eleven, I have been coding for over 17 years. 
           In this time I&apos;ve learnt to write clean, well-tested and performant code and to identify problems before they happen.
           I am known for approachability, great quality work and creating tooling that makes life better for the whole team.</p>
        
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