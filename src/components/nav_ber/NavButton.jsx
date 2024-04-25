


// //real
// import NavLogo from "./NavLogo";
// import React, { useState } from 'react';
// import sidebar from "./sidebar";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// const NavButton = () =>{

  
// return (<>
  
  
//    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//          <span className="navbar-toggler-icon"></span>
//          </button>
   


// </>)
   



// }

// export default NavButton;




import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavButton.css"
import beauty from "./img/beauty.png"
import men from "./img/men.png"
import women from "./img/women.png"
import kid from "./img/kid.png"
import home from "./img/home.png"

function NavButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         
        <div className="nav-search-side">
        <input type="text" placeholder="search for products,brands and more" />
    </div>


        <div class="css-category-div" >
          <img src={men} class="css-category-img" />
          <span class="css-category-name">Men</span>
        </div>

        <div class="css-category-div" >
          <img src={women} class="css-category-img" />
          <span class="css-category-name">Women</span>
        </div>


        <div class="css-category-div" >
          <img src={kid} class="css-category-img" />
          <span class="css-category-name">Kid</span>
        </div>


        <div class="css-category-div" >
          <img src={home} class="css-category-img" />
          <span class="css-category-name">Home & Living</span>
        </div>


        <div class="css-category-div" >
          <img src={beauty} class="css-category-img" />
          <span class="css-category-name">Beauty</span>
        </div>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavButton;
































