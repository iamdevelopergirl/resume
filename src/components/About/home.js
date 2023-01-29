import './home.css';
import FollowLinks from '../Common/followLinks.js';
import Button from '../Common/button.js';
import { useHistory } from 'react-router-dom';
import Resume from '../Resume/resume.js';
import Projects from '../Projects/projects.js';

const Home = () => {
    const { push } = useHistory();
    return (
        <div>
            <div className="home-container">
                <div className="left-container">
                    <div className="profile-photo">
                        
                    </div>
                    <div className="name">
                        <h1>Elakya <br/> Velumaniyan</h1>
                    </div>
                    <div className="seperator">
                        
                    </div>
                    <div className="designation">
                        <p>FRONTEND DEVELOPER</p>
                    </div>
                    <div className="links">
                        <div className="follow-link-container">
                            <FollowLinks className="from-home-link"/>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="hello">Hello</div>
                    <div className="what-i-do">Here's who and what I do</div>
                    <div className="resume-container">
                        <Button id="resume" name="Resume" className="black" onClick={() => push('/resume')} active/>
                        <div></div>
                        <Button id="projects" name="Projects" onClick={() => push('/projects')} className="black"/>
                    </div>
                    <div className="summary">
                        I'm an IT professional with deep knowledge and proficiency in JavaScript, React.Js, HTML, CSS, Lightning design system and mobile responsive website development, as well as highly potent skills and ability in writing cross browser extension code. 
                        <br/>
                        <br/>
                        I'm currently working with Delivery Hero as a senior software engineer for the clients's vendor portal.
                        <br/>
                        <br/>
                        I was working with NortonLifeLock as a product owner for Norton Password Manager product.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;