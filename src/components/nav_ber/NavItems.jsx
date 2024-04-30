
// //origianl
import "./NavBar.css"
import NavLogo from "./NavLogo";
import bag from "./bag.png"
import wish from "./wishlist.png"

const NavItems = () =>{

return (<>

  <NavLogo />
   
    <div className="nav-items">

       <a href="#"><h2>Men</h2></a> 
       <a href="#"><h2>Women</h2></a>
       <a href="#"><h2>Electronics</h2></a>
       <a href="#"><h2>Jewelery</h2></a>
       <a href="#"><h2>Beauty</h2></a>
       
    </div>


    <div className="nav-search">
        <input type="text" placeholder="search for products,brands and more" />
    </div>


    <div className="nav-wishlist-bag">
       
       <div className="wishlist">
        <img src={wish} />
        <h5>Wishlist</h5>
       </div>

       <div className="bag">
        <img src={bag} />
        <h5>Bag</h5>
       </div>

    </div>




</>)


}

export default NavItems;