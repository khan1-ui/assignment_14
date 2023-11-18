import {NavLink} from "react-router-dom";
import './mainMenu.style.css'
const MainMenu = () => {
    return (
        <div className="nav-div-items">
            <nav className="nav-item">
                <div>
                    <img src="Frame 8.png" alt="" className="img" />
                </div>
                <div>
                    <ul className='nav-bar'>
                        <li className="navbar a" >
                           <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="navbar a">
                           <NavLink to="/team">Team</NavLink>
                        </li>
                        <li className="navbar a">
                           <NavLink to="/service">Service</NavLink>
                        </li>
                        <li className="navbar a">
                           <NavLink to="/project">Project</NavLink>
                        </li>
                        <li className="navbar a">
                           <NavLink to="/testimonial">Testimonial</NavLink>
                        </li>
                        <button className="nav-ul-btn">
                            Login
                        </button>
                    </ul>
                    
                </div>
                <div>
                    <button className='nav-btn'>
                        Registration
                    </button>
                </div>
            </nav>
          
        </div>
    );
};

export default MainMenu;