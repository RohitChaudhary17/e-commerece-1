
// import "./Card.css"
// import i1 from './Carousel-1.jpg'

// function Card({ title, description, price, category, image, rating }){

//   return (<>


// <div id="card-main">


// <div className="card-container">

// <div className="card-top">
//   <img src={image} className="card-img"/>
// </div>

// <div className="card-bottom">

// <div class="rating">
//   {rating} ⭐ | 1000
//   </div>


//   <div class="company-name">{title}</div>
//       <div class="item-name">{description}</div>
//       <div class="price">
//           <span class="current-price">Rs {price}</span>
//           <span class="original-price">Rs {price + 234}</span>
//           <span class="discount">20% OFF</span>
//       </div>
//       <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>


// </div>


// </div>



// </div>


//   </>)

// }

// export default Card;















import React from 'react';
import "./Card.css";
import bagImg from "./bag.png"

function Card({ title, description, price, category, image, rating }) {
  return (
    <>
      
        <div className="card-container">
          <div className="card-top">
            <img src={image} alt={title} className="card-img" />
          </div>
          <div className="card-bottom">
            <div className="rating">
              {rating.rate} ⭐ | {rating.count} reviews
            </div>
            <div className="company-name">{title}</div>
            <div className="item-name">{description}</div>
            <div className="price">
              <span className="current-price">Rs {price}</span>
              <span className="original-price">Rs {price + 234}</span>
              <span className="discount">20% OFF</span>
            </div>
          
            <button className="btn-add-bag" onClick={() => addToBag(item.id)}><img src={bagImg} className='bag-img'/> Add to Bag</button>
          </div>
        </div>
      
  </>
  );
}

export default Card;
