

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
            <nav className="navbar navbar-expand-lg navbar-light bg-white css-nav">
                
                {isMobile ? <NavLogo /> : <NavItems />}
                <NavButton />
            </nav>
        </>
    );
}

export default NavBar
















// working
// import React, { useState, useEffect } from 'react';
// import NavItems from "./NavItems";
// import NavButton from "./NavButton";
// import NavLogo from "./NavLogo";
// import Sidebar from "./sidebar"; // Corrected import
// import "bootstrap/dist/css/bootstrap.min.css";

// function NavBar({ toggleSidebar, isSidebarOpen }) {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 1000);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white css-nav">
//         {isMobile ? <NavLogo /> : <NavItems />}
//         <NavButton toggleSidebar={toggleSidebar} />
//       </nav>
//       <Sidebar /> {/* Always render Sidebar, but control its visibility with isSidebarOpen */}
//       <div
//         className={`offcanvas offcanvas-start col-6 css-sidebar-main ${isSidebarOpen ? 'show' : ''}`}
//         tabIndex="-1"
//         id="offcanvasWithBothOptions"
//         aria-labelledby="offcanvasWithBothOptionsLabel"
//       >
//         {/* Your sidebar content here */}
//       </div>
//     </>
//   );
// }

// export default NavBar;
