
import "./CarouselMobile.css"
import f1 from "./img/f1.jpg"
import f2 from "./img/f2.jpg"
import f3 from "./img/f3.jpg"
import f4 from "./img/f4.jpg"
import f5 from "./img/f5.jpg"
import f6 from "./img/f6.jpg"
import f7 from "./img/f7.jpg"
import f8 from "./img/f8.jpg"


function CarouselMobile(){

  return(<>
  
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
  
  </>)

}

export default CarouselMobile;