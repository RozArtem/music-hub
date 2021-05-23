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
                            <li><a href="#">my profile</a></li>
                            <li><a href="#">users</a></li>
                        </ul>
                    </nav>

                    <button className="navbar___navigation___logout">logout</button>

                </div>
            </div>
    )
}

export default Navbar
