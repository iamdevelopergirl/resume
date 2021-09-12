import { NavLink } from 'react-router-dom'; 

const Hamburger = (props) => {
    return(
        <div>
            <nav>
            <NavLink exact to="/" activeClassName="activeElem">Home</NavLink>
            <NavLink exact to="/learning" activeClassName="activeElem">Learning</NavLink>
            <NavLink exact to="about" activeClassName="activeElem">About</NavLink>
            </nav>
        </div>
        
    )
}

export default Hamburger;