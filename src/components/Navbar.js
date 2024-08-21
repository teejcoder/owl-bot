import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Displaying the Bellroy logo */}
            <img src="/assets/bellroy-logo.png" alt="Bellroy logo" className="logo"/>

            <div className="socials">            
                {/* Link to the GitHub profile */}
                <a href="https://github.com/teejcoder" target="_blank" rel="noopener noreferrer">
                    {/* Displaying the GitHub icon */}
                    <VscGithubAlt size={30} color="#333" value={{ className: "react-icons" }}/>
                </a>
                {/* Link to the LinkedIn profile */}
                <a href="https://www.linkedin.com/in/tristan-maber/" target="_blank" rel="noopener noreferrer">
                    {/* Displaying the LinkedIn icon */}
                    <CiLinkedin size={35} color="#333" value={{ className:"react-icons" }}/>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;