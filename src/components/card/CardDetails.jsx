import React from 'react';
import "./CardDetail.css";
import bagImg from "./bag.png";

function CardDetails({ data }) {
  return (
    <>
      <div className="Card-details-main">
        <div className="Card-details-right">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="Card-details-left">
          <div className="brand-name-rating">
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>
            <div className="rating-1">{data.rating.rate} ⭐ | {data.rating.count} rating</div>
          </div>

          <div className="price-chart-bag">
            <h3>₹{data.price}</h3>
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
            <button className="card-details-bag-btn" onClick={() => addToBag(data.id)}>Add to Bag</button>
            <button className="card-details-wishlist-btn">Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
