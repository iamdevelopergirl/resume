import './about.scss';
import Modal from '../PortalModal/modalWrapper.js';
import Home from './home.js';

const About = () => (
    <div className="main">
        <section className="rows main-content">
            <section className="absolute-positioned"></section>
            <section className="right-container"></section>
        </section>
        <div className="nav-bar">
            <Modal open={true}>
                <Home />
            </Modal>
        </div>
    </div>
    
)

export default About;