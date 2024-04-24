import "./NavBar.css"
import NavLogo from "./NavLogo";


const NavItems = () =>{

return (<>

  <NavLogo />
   
    <div className="nav-items">

       <a href="#"><h2>Men</h2></a> 
       <a href="#"><h2>Women</h2></a>
       <a href="#"><h2>Kids</h2></a>
       <a href="#"><h2>Home & livings</h2></a>
       <a href="#"><h2>Beauty</h2></a>
       
    </div>


    <div className="nav-search">
        <input type="text" placeholder="search for products,brands and more" />
    </div>


    <div className="nav-wishlist-bag">
       
       <div className="wishlist">
        <img src="\src\assets\wishlist.png" />
        <h5>Wishlist</h5>
       </div>

       <div className="bag">
        <img src="\src\assets\bag.png" />
        <h5>Bag</h5>
       </div>

    </div>




</>)


}

export default NavItems;