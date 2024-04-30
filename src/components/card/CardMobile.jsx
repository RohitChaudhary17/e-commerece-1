//original
import React from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';
import "./CardMobile.css"

function CardMobile({ data }) {
  

  return (
    <>
      
      <BootstrapCarousel id="card-mobile-main">
        
        {data && data.map(dataItem => (
          
          <BootstrapCarousel.Item key={dataItem.id} id="item-list">
            <img className="d-block w-100 img" id="img" src={dataItem.image} alt={dataItem.title} />
            <BootstrapCarousel.Caption>
              {/* <h5 className='title'>{dataItem.title}</h5>
              <h4 className='price'>Rs {dataItem.price}</h4> */}
            </BootstrapCarousel.Caption>
            <div className='item-details'>
            <h5 className='title'>{dataItem.title}</h5>
              <h4 className='price'>Rs {dataItem.price}</h4>
            </div>
          </BootstrapCarousel.Item>
          
        ))}
      
      </BootstrapCarousel>
    </>
  );
}

export default CardMobile;













