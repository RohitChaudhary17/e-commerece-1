
import React from 'react';
import { useState, useEffect } from 'react';
import './CarouselMobile.css';
import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import f3 from './img/f3.jpg';
import f4 from './img/f4.jpg';
import f5 from './img/f5.jpg';
import f6 from './img/f6.jpg';
import f7 from './img/f7.jpg';
import f8 from './img/f8.jpg';
import BootstrapCarousel from 'react-bootstrap/Carousel'; // Renamed the imported Carousel

function CarouselMobile() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900);
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`carousel-m-main ${isMobileView ? 'mobile-view' : 'desktop-view'}`}>
      {isMobileView ? (
        <div className="carousel-m-content">
          <Carousel />
        </div>
      ) : (

        
        <div className="carousel-m-main">

          <div className="carousel-m-top">
            <div className="carousel-m-top-right">
              <h4>Trending men's wear</h4>
              <h5>Dapper fit to rock</h5>
            </div>

            <div className="carousel-m-top-left">
              <button >Explore More</button>
            </div>

          </div>

          <div className="carousel-m-mid" >

            <div className="carousel-m-card">
              <img src={f1} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

            <div className="carousel-m-card">
              <img src={f2} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

            <div className="carousel-m-card">
              <img src={f3} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

            <div className="carousel-m-card">
              <img src={f4} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

          </div>

          <div className="carousel-m-bottom">

            <div className="carousel-m-card">
              <img src={f5} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

            <div className="carousel-m-card">
              <img src={f6} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

            <div className="carousel-m-card">
              <img src={f7} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

            <div className="carousel-m-card">
              <img src={f8} />
              <h5>Daily wear</h5>
              <h5>UNDER Rs 499</h5>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <BootstrapCarousel>
      
      <BootstrapCarousel.Item>
        <img className="d-block w-100" src={f1} alt="First slide" />
        <BootstrapCarousel.Caption>
          <h3>Daily Wear</h3>
          <p>In Just Rs 499</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      
      <BootstrapCarousel.Item>
        <img className="d-block w-100" src={f2} alt="Second slide" />
        <BootstrapCarousel.Caption>
        <h3>Daily Wear</h3>
          <p>In Just Rs 499</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      
      <BootstrapCarousel.Item>
        <img className="d-block w-100" src={f3} alt="Third slide" />
        <BootstrapCarousel.Caption>
        <h3>Daily Wear</h3>
          <p>In Just Rs 499</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>

      <BootstrapCarousel.Item>
        <img className="d-block w-100" src={f4} alt="Third slide" />
        <BootstrapCarousel.Caption>
        <h3>Daily Wear</h3>
          <p>In Just Rs 499</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>

      <BootstrapCarousel.Item>
        <img className="d-block w-100" src={f5} alt="Third slide" />
        <BootstrapCarousel.Caption>
        <h3>Daily Wear</h3>
          <p>In Just Rs 499</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
}

export default CarouselMobile;














