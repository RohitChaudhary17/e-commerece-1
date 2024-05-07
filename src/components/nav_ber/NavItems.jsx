// //origianl
import "./NavBar.css";
import NavLogo from "./NavLogo";
import wish from "./wishlist.png";
import { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import bag from "./bag.png";
import { Items } from "../../Store/MainStore";
import { TiDelete } from "react-icons/ti";

const NavItems = () => {
  const [show, setShow] = useState(false);
  let { BagItems, Wishlist } = useContext(Items);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavLogo />

      <div className="nav-items">
        <a href="#">
          <h2>Men</h2>
        </a>
        <a href="#">
          <h2>Women</h2>
        </a>
        <a href="#">
          <h2>Electronics</h2>
        </a>
        <a href="#">
          <h2>Jewelery</h2>
        </a>
        <a href="#">
          <h2>Beauty</h2>
        </a>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="search for products,brands and more" />
      </div>

      <div className="nav-wishlist-bag">
        <div className="wishlist">
        
          <img src={wish} />
          <h5>Wishlist</h5>
        
          <span>{Wishlist.length}</span>
        </div>

        <div className="bag" variant="primary" onClick={handleShow}>
          <img src={bag} />
          <h5>Bag</h5>
          <span>{BagItems.length}</span>
        </div>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Bag</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body id="bag-list-main">
            <p>This is your Shopping bag list</p>

            {BagItems.map((item) => (
              <div className="bag-list-main-div">
                <div className="bag-items">

                <div className="cancel-icon-div">
                <TiDelete className="cancel-icon" />
                </div>

                <div className="side-bag-img-div">
                  <img src={item.image} alt={item.title} />
                  </div>

                  <div className="side-bag-title-div">
                  <h4>{item.title}</h4>
                  </div>

                </div>
              </div>
            ))}

            <button type="button">Place Order</button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default NavItems;
