import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import bagImg from "./bag.png";
import CardMobile from "./CardMobile";
import { useNavigate } from "react-router-dom";
import { Items } from "../../Store/MainStore";

function Card({
  title,
  description,
  price,
  category,
  image,
  rating,
  onClick,
  onButtonClick,
  handleOnClick,
}) {
  let navigate = useNavigate();
  let { AddItems, selectedCard } = useContext(Items);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addToBag = (event) => {
    event.stopPropagation();
    if (onButtonClick) {
      onButtonClick();
    }
    handleOnClick();
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
      navigate("/card-detail");
    }
  };

  if (isMobile) {
    return <CardMobile />;
  }

  return (
    <div className="card-container" onClick={handleClick}>
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
        <button className="btn-add-bag" onClick={addToBag}>
          <img src={bagImg} className="bag-img" /> Add to Bag
        </button>
      </div>
    </div>
  );
}

export default Card;
