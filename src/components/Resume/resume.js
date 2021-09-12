import Layout from '../Common/layout.js';
import Button from '../Common/button.js';
import './resume.css';
import Experience from './experience.js';
import SkillSet from './skillset.js';

const Role1 = "";
const Role2= "";
const Role3= "";
const Role4 = "";

const handleDownloadClick = () => {

}

const Resume = () => (
    <div>
        <Layout title="Resume">
            <div className="experience text-edit relative-position">
                   <h2>Experiences</h2>
            </div>
            <div className="download-cv text-edit relative-position">
                    <a href="../../assets/Elakya_V_-_Senior_Frontend_Engineer.pdf" download>
                    <Button name="Download CV" className="green" onClick={handleDownloadClick}/>
                    </a>
            </div>
            <Experience 
            experienceNumber="1"
            year="2019 - Present"
            jobPosition="Senior Software Engineer"
            companyName="NortonLifeLock"
            jobLocation="Chennai"
            roles={["I have owned nearly 13 projects per year from initial research and conceptual design through testing and implementation phases. For some of the projects, I even worked with external teams like mobile, UX and SRE team to get the builds to clousre and release it. Some of my projects and respective responsibilities include", 
            "Owned more than 5 projects per year from initial research and conceptual design through testing and implementation phases.",
            "Designed and executed security measures such as encryption for browser extension and also mobile apps.",
            "Researched new technologies, software packages and third party libraries to use in browser extension projects.",
            "Collaborated with in-house web designers to create sleek and innovative UI design.",
            "Took concepts and produced design mockups and prototypes to strengthen designs and enhance user experiences.",
            "Documented all software development methodologies in technical manuals to be used by Software Engineers in future projects.",
            "Conducted unit testing to deliver optimal browser functionality.",
            "Reviewed code to validate structures, assess security and verify browser, device and operating system compatibility.",
            "Tested troubleshooting methods, devised innovative solutions, and documented resolutions for inclusion in knowledge base for support team use.",
            "Technologies used: Javascript, React.js, HTML, CSS, AWS, Node, Python, Swift"]}
            />
            <Experience 
            experienceNumber="2"
            year="2017 - 2019"
            jobPosition="Software Engineer"
            companyName="Symantec"
            jobLocation="Chennai"
            roles={["Some of my projects and respective responsibilities include", 
            "Developed features for extensions such as password generator, web analysis engine and added a functionality to let user authenticate using mobile.",
            "Designed and updated layouts to meet usability and performance requirements.",
            "Conceived and built optimized landing pages, dashboards and modals in ReactJs and JavaScript including cross-browser compatibility.",
            "Implemented and monitored extension usage and functionality for continuous improvement.",
            "Applied Apple's Swift development language to code native apps for iOS platform.",
            "Researched and selected APIs for integration into development projects.",
            "Established best practices and innovative solutions to enhance production rates and output quality.",
            "Technologies used: Javascript, React.js, HTML, CSS, AWS, Node, Python, Swift"]}
            />
            <Experience 
            experienceNumber="3"
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
            experienceNumber="4"
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
            experienceNumber="5"
            year="2009 - 2013"
            jobPosition="College of Engineering Guindy"
            companyName="Bachelor of Technology"
            jobLocation="Chennai"
            roles="I have completed my under graduate in Information technology with 82%. During this, I have worked on several academic projects that include mobile application too. It was just a car racer game."
            />
            <Experience 
            experienceNumber="6"
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