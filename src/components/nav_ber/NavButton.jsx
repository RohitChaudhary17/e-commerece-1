
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavButton.css"
import beauty from "./img/beauty.png"
import men from "./img/men.png"
import women from "./img/women.png"
import electronics from "./img/electronics.png"
import jewelery from "./img/jewelery.png"

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
          <a href="#"><span class="css-category-name">Men</span></a>
        </div>

        <div class="css-category-div" >
          <img src={women} class="css-category-img" />
          <a href="#"><span class="css-category-name">Women</span></a>
        </div>


        <div class="css-category-div" >
          <img src={electronics} class="css-category-img" />
          <a href="#"><span class="css-category-name">Electronic</span></a>
        </div>


        <div class="css-category-div" >
          <img src={jewelery} class="css-category-img" />
          <a href="#"><span class="css-category-name">Jewelery</span></a>
        </div>


        <div class="css-category-div" >
          <img src={beauty} class="css-category-img" />
          <a href="#"><span class="css-category-name">Beauty</span></a>
        </div>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavButton;
































