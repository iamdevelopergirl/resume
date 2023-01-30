import Layout from '../Common/layout.js';
import Button from '../Common/button.js';
import './resume.css';
import Experience from './experience.js';
import SkillSet from './skillset.js';

const handleDownloadClick = () => {

}

const Resume = () => (
    <div>
        <Layout title="Resume">
            <div className="experience text-edit relative-position">
                   <h2>Experiences</h2>
            </div>
            <div className="download-cv text-edit relative-position">
                    <a href="Elakya_Velumaniyan_-_Senior_Frontend_Engineer.pdf" download="Elakya_Velumaniyan_-_Senior_Frontend_Engineer.pdf">
                        <Button name="Download CV" className="green"/>
                    </a>
            </div>
            <Experience 
            experienceNumber="1"
            year="2021 - Present"
            jobPosition="Senior Software Engineer"
            companyName="Delivery Hero"
            jobLocation="Dubai"
            roles={["I have owned nearly 4 projects for each quater to redesign the  from initial research and conceptual design through testing and implementation phases. For some of the projects, I even worked with external teams like mobile, UX and SRE team to get the builds to clousre and release it. Some of my projects and respective responsibilities include", 
            "Significantly improved web page performance by 70% by addressing issues identified in the lighthouse report, through optimization of image load time, design of a new architecture for styling and establishment of standards for maintainable code resulting in a more efficient and user-friendly experience.",
            "Overhauled the entire vendor portal for Foodpanda, resulting in a substantial increase in onboarding conversion rate from 50% to 98%. Continuously working to further improve the conversion rate through user-centered interactive testing to enhance the overall user experience.",
            "Successfully established a new market in Turkey for Yemeksepeti by launching a web page, which now receives over 88% of orders. This was achieved through the successful implementation of my market entry strategy.",
            "Streamlined the process of comparing styling changes and deploying them by eliminating manual work, leading to an impressive increase in productivity time of 80%. This improvement greatly increased the efficiency of the team.",
            "Designed a webpage for the Pedidosya vendor portal that served as a model of excellence, inspiring stakeholders from 3 other markets in various regions to adopt the same design, highlighting the value of my design skills and the impact it had on the company's success.",
            "Played a vital role in the development of the team by hiring and mentoring 3 front-end developers, expanding their skill set in the Salesforce Lightning Design System. This led to a significant improvement in the team's overall performance and capabilities.",
            "Technologies used: Javascript, React.js, HTML, CSS, Lightning design system (LWC)"
            ]}
            />
            <Experience 
            experienceNumber="2"
            year="2019 - 2021"
            jobPosition="Senior Software Engineer"
            companyName="NortonLifeLock"
            jobLocation="Chennai"
            roles={["I have owned nearly 13 projects per year from initial research and conceptual design through testing and implementation phases. For some of the projects, I even worked with external teams like mobile, UX and SRE team to get the builds to clousre and release it. Some of my projects and respective responsibilities include", 
            "Significantly improved the security rating of the product to 5/5 by addressing high severity vulnerabilities identified through penetration testing, such as implementing event handling in the extension to distinguish between user events and script events and by ensuring that passwords were no longer stored in a raw format on the local disk, providing a secure and reliable user experience.",
            "Successfully migrated 100% of customers who were using the product in Internet Explorer to alternative browsers by developing an IE11 support page on the Norton portal, effectively communicating the end-of-support status of IE and ensuring a seamless transition for our users.",
            "Facilitated the product unlock feature by redesigning the Norton Password Manager extension to manage all devices. Designed and implemented robust security measures, such as encryption, for a feature that enables users to onboard the password manager extension using QR code, providing a secure and seamless experience.",
            "Was able to optimize the build process by leveraging Jenkins, resulting in a significant reduction of approximately 3 hours per build. Additionally, this solution effectively addressed version inconsistencies across multiple products, ensuring a cohesive and uniform user experience.",
            "Developed a single-page application for the Password Manager feature on Norton's e-commerce site (https:/my.norton.com/extspa/passwordmanager), providing a seamless user experience and streamlined access to password management functionality.",
            "As a result of the discontinuation of web extension support in Safari, I was able to swiftly migrate 100% of users in Safari to the new app extension, which I had developed within a constrained timeline, ensuring continuity of service for our users.",
            "Designed an approach to improve the performance of web page analysis, which led to a significant reduction in page load time from 10 seconds to 1 second on high content sites, thereby enhancing the user experience.",
            "Provided assistance to an external team by offering support in testing, troubleshooting methods, and documenting resolutions for integrating 3rd party sign-ins such as Google and Apple into the Password Manager login flow, which enabled a more streamlined user experience.",
            "Awarded star of the sprint continuously for more than 4 times.",
            "Awarded best employee of the quarter 2019 and received an amount of 7K INR.",
            "Technologies used: Javascript, React.js, HTML, CSS, AWS, Node, Python, Swift"]}
            />
            <Experience 
            experienceNumber="3"
            year="2017 - 2019"
            jobPosition="Software Engineer"
            companyName="Symantec"
            jobLocation="Chennai"
            roles={["Some of my projects and respective responsibilities include", 
            "Developed and implemented new features for extensions that allow users to authenticate the extension vault using a mobile application, providing a secure and convenient way for users to access their data.",
            "Created a common framework for the Norton Password Manager and Norton Safe Web extensions that enabled the use of reusable code, resulting in a significant reduction in implementation time, and improved the overall efficiency of the development process.",
            "Assisted the team by providing expertise in resolving technical issues when designing the Safari app extension. My contributions included providing debugging options and addressing compliance policy threats, allowing the team to efficiently and effectively develop the extension.",
            "Resolved critical defects in the Safari app extension build, ensuring its readiness for release, and wrote unit tests as necessary. Additionally, I addressed defects raised by the localization team related to the User Interface, which was developed by the team, thus ensuring a high-quality and user-friendly experience.",
            "Worked in collaboration with other teams to create an initial build for the Safari app extension in order to resolve dependencies and ensure that other teams could continue their work smoothly.",
            "Designed and updated the layouts for the password generator in the Norton Password Manager extension to meet usability and performance requirements, providing a more user-friendly and efficient experience.",
            "Utilized Apple's Swift development language to implement a password reset feature in the Norton Password Manager mobile application for iOS using biometric authentication.",
            "Established best practices and innovative solutions to improve production rates and output quality during the development of a Safety dashboard for the Norton Password Manager extension.",
            "Implemented a feature to export the vault data in CSV format for the Norton Password Manager extension.",
            "Coordinated with the mobile team to automate the mobile unlock feature using mobile data mock, which helped in accepting a build for release",
            "Technologies used: Javascript, React.js, HTML, CSS, AWS, Node, Python, Swift"]}
            />
            <Experience 
            experienceNumber="4"
            year="2015 - 2017"
            jobPosition="Associate Software Engineer"
            companyName="Symantec"
            jobLocation="Chennai"
            roles={["I have attended multiple support calls to get to know the problem user is facing using my product.",
            "Developed features for toolbar and extensions in Chrome, Firefox and IE such as home page and default search provider.",
            "Developed a tool to get the number of extensions installed for a browser in a machine.",
            "Developed a 64bit version of product and supported visual studio updates.",
            "Technology used : Javascript, C++"]}
            />
            <Experience 
            experienceNumber="5"
            year="2013 - 2015"
            jobPosition="Associate SQA Engineer"
            companyName="Symantec"
            jobLocation="Chennai"
            roles={["Developed an automation tool to automate UI test cases which reduced 100hrs of manual execution. Maintained the integrity of test cases and adopted new frameworks to automate web based test cases.",
            "Technology used : Python, Selenium, Ranorex"]}
            />
            <div className="education text-edit relative-position">
                   <h2>Education</h2>
            </div>
            <Experience 
            experienceNumber="6"
            year="2009 - 2013"
            jobPosition="College of Engineering Guindy"
            companyName="Bachelor of Technology"
            jobLocation="Chennai"
            roles="I have completed my under graduate in Information technology with 82%. During this, I have worked on several academic projects that include mobile application too. It was just a car racer game."
            />
            <Experience 
            experienceNumber="7"
            year="2007 - 2009"
            jobPosition="Kurinji Matriculation higher secondary school"
            companyName="Computer science"
            jobLocation="Namakkal"
            roles="I have completed my higher secondary education  with 96%."
            />
            <SkillSet/>
        </Layout>
    </div>
)

export default Resume;