import './footer.css';
import FollowLinks from '../Common/followLinks.js';

const contacts = {
    "Call"  :  "0-50-3170-646", 
    "Write" : "elakya.velumaniyan@gmail.com",
    "Follow" : ""
}

const handleLinkedInIconClick = ()  => {
    window.open('https://www.linkedin.com/in/elakya-v/');
}

const contactDetails = () => {

    // return iconList.map(([key, value]) => 
    //         <div key={key} className={`${key}-icon`} onClick={(event) => onBrowserIconClick(event, key)}>
    //             <img src={value} alt={key}/>
    //             <p className="browser-name">{key}</p>
    //         </div>
    //     )

    return Object.entries(contacts).map(([key, value]) => {
        if(key === "Follow"){
            return (
                <div key={key} className="contact-details">
                    <div>{key}</div>
                    <FollowLinks className="from-footer-link"/>
                </div>
            )
        }
        return (
            <div key={key} className="contact-details">
                <div>{key}</div>
                <div>{value}</div>
            </div>
        )
    })
}

const footer = () => (
    <footer className="footer-container">
        <section className="footer-section">
            <div className="copyright">
                <div>@2021 by Elakya V</div>
                <div>Proudly created by Me :)</div>
            </div>
            <div className="contacts">
                {contactDetails()}
            </div>
        </section>
    </footer>
);

export default footer;