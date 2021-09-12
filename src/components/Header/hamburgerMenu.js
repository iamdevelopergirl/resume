import './hamburgerMenu.scss';
import TextSlide from '../Common/textSlide.js';
import Hamburger from '../Hamburger/hamburger.js';


const HamburgerMenu = () => {
    return(
        <div className="hamburger-menu-container right-grid-item transform-right-grid">
            <TextSlide text="hello everyone... This is my personal blog... Setting seeing image slide show here...."/>
            <Hamburger/>
        </div>
    )
}

export default HamburgerMenu;