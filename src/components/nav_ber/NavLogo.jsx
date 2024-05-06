import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import i1 from "./mynta-logo.png";

function NavLogo() {
  let navigate = useNavigate();

  let handleOnClick = () => {
    navigate("/");
  };

  return (
    <>
      <div id="nav-img" onClick={handleOnClick}>
        <img src={i1} alt="Mynta Logo" />
      </div>
    </>
  );
}

export default NavLogo;
