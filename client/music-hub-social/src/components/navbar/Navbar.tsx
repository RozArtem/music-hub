import React from 'react'
import './navbar.css'


const Navbar: React.FC = () => {
    return (
        <div className="navbar">
                <div className="navbar___logo-container">

                    <img src="./logo.svg" alt="musichubsocial" /> 

                </div>
                <div className="navbar___navigation">
                    <nav className="navbar___navigation___nav-container">
                        <ul className="nav-content">
                            <li><a href="#">My profile</a></li>
                            <li><a href="#">Profiles</a></li>
                        </ul>
                    </nav>
                    <p>sing up</p>
                    <button className="navbar___navigation___logout">Log Out</button>

                </div>
            </div>
    )
}

export default Navbar
