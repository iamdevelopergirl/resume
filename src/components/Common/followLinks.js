import LinkedInIcon from '../../assets/linkedin-icon.svg';
import GithubIcon from '../../assets/github-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import './followLinks.css';

const handleClick = (type) => {
    let urlToOpen = "";
    switch(type){
        case "linkedin":
            urlToOpen = "https://www.linkedin.com/in/elakya-v/";
            break;
        case "github":
            urlToOpen = "https://github.com/iamdevelopergirl";
            break;
        case "twitter":
            urlToOpen = "https://twitter.com/elakyasohnu";
            break;
        case "facebook":
            urlToOpen = "https://www.linkedin.com/in/elakya-v/";
            break;
        default:
            break;
    }

    window.open(urlToOpen);
}   

const FollowLinks = ({className}) => (
    <div>
        <div className={`link-container ${className}`}>
            <img src={LinkedInIcon} alt="LinkedIn Logo" role="button" onClick={() => handleClick("linkedin")}/>
            <img src={GithubIcon} alt="Github Logo" onClick={() => handleClick("github")} />
            <img src={TwitterIcon} alt="Twitter Logo" onClick={() => handleClick("twitter")} />
            <img src={FacebookIcon} alt="Facebook Logo" onClick={() => handleClick("facebook")} />
            {/* <object className="pointer linkedIn" useMap="#linkedin" type="image/svg+xml" data={LinkedInIcon}>LinkedIn</object>
            <object className="pointer github" type="image/svg+xml" data={GithubIcon} onClick={() => handleClick("github")} >GitHub</object>
            <object className="pointer twitter" type="image/svg+xml" data={TwitterIcon} onClick={() => handleClick("twitter")} >LinkedIn</object>
            <object className="pointer facebook" type="image/svg+xml" data={FacebookIcon} onClick={() => handleClick("facebook")}>GitHub</object> */}
        </div>
    </div>
) 

export default FollowLinks;