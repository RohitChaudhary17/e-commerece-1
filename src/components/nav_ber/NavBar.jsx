

//real
import "./NavBar.css";
import NavItems from "./NavItems";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";




function NavBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 990);
        };

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white css-nav" id="css-nav">
                
                {isMobile ? <NavLogo /> : <NavItems />}
                <NavButton />
            </nav>
        </>
    );
}

export default NavBar
