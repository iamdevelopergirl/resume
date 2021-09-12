import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header(props){
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
        </header>
    )
}

export default Header;