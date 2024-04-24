import "./CarouselTwo.css"
import i1 from './img1.png'
import i2 from './img2.png'
import i3 from './img3.png'
import "bootstrap/dist/css/bootstrap.min.css"


function CarouselTwo(){
  return (<>
  
  <div>
    <h2>MEDAL WORTHY BRANDS TO BAG</h2>
  </div>

  
  
  <div>
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active carouesl-five-img" >
      <img src={i1} class="d-block w-100" alt="..." />
      
    </div>
    <div class="carousel-item">
      <img src={i2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={i3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
  
  </>)
}

export default CarouselTwo;