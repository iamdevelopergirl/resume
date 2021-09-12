
import Layout from '../Common/layout.js';
import './contact.css';

const Contact = () => (
    <div>
         <Layout title="Contact">
            <div className={`experience-1 relative experience-container `}>
                <div className="vertical-bar">

                </div>
                <div className="call relative align-start">
                    <h2>Call : +971 503170646</h2>
                </div>
                <div className="mail relative align-start">
                    Email id :  elakya.velumaniyan@gmail.com
                </div>
                <div className="linkedin relative align-start">
                    Linkedin Id : <a className="link" href="https://www.linkedin.com/in/elakya-v/">https://www.linkedin.com/in/elakya-v/</a>
                </div>
                <div className="github relative align-start">
                    Github Id : <a className="link" href="https://github.com/iamdevelopergirl">https://github.com/iamdevelopergirl</a>
                </div>
            </div>
         </Layout>
    </div>
)

export default Contact;