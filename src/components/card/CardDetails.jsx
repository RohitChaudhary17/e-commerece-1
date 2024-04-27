import "./CardDetail.css"
import img2 from "./img2.png"
import NavBar from "../nav_ber/NavBar";
import Footer from "../footer/Footer";



function CardDetails(){

return (<>



<div className="Card-details-main">

  <div className="Card-details-right">

    <img src={img2} />

  </div>

  <div className="Card-details-left">

 <div className="brand-name-rating">
  <h2>rohit</h2>
  <h3>rohit tshirt</h3>

  <div className="rating-1">
  4.4 ⭐ | 1.9k rating
  </div>

 </div>

 <div className="price-chart-bag">
  <h3>₹1000</h3>
  <p>inclusive of all taxes</p>
  <h4>Select size</h4>

  <div className="chart-size-div">
  <div className="chart-size">XS</div>
  <div className="chart-size">S</div>
  <div className="chart-size">M</div>
  <div className="chart-size">L</div>
  <div className="chart-size">XL</div>
  </div>

  
 </div>

<div className="bag-wishlist">
  <button className="card-details-bag-btn">Add to Bag</button>
  <button className="card-details-wishlist-btn">Wishlist</button>
</div>

  </div>



</div>


</>)

}

export default CardDetails;

