import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from '../PortalModal/modalWrapper.js';
import HamburgerMenu from './hamburgerMenu.js';

function Header(props){

    const [showHamburgeMenu, setShowHamburgerMenu] = useState(false);

    const handleClick = () => {
        setShowHamburgerMenu(true)
    }

    
    return(
        
        <header className="header-container">
            <section className="header-section">
                <div className="blog-title">
                    <span className="blog-name">Elakya Velumaniyan</span>
                    <span className="blog-designation">FRONTEND DEVELOPER</span>
                </div>
                <div className="navigation-div">
                    <nav>
                        <NavLink exact to="/" activeClassName="activeElem">ABOUT ME</NavLink>
                        <NavLink exact to="/resume" activeClassName="activeElem">RESUME</NavLink>
                        <NavLink exact to="/projects" activeClassName="activeElem">PROJECTS</NavLink>
                        <NavLink exact to="/contact" activeClassName="activeElem">CONTACT</NavLink>
                    </nav>
                </div>
            </section>
            
            {/* <div className="nav-bar" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars}/>
                <Modal open={showHamburgeMenu}>
                    <HamburgerMenu />
                </Modal>
            </div> */}
        </header>
    )
}

export default Header;