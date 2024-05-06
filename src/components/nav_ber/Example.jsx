import { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import bag from "./bag.png";
import { Items } from "../../Store/MainStore";

function Example() {
  const [show, setShow] = useState(false);
  let { BagItems } = useContext(Items);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
            <div className="bag-list-main-div" key={data.id}>
              <div className="bag-items">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}

          <button type="button">Place Order</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
