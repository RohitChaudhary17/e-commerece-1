// //original

import NavBar from "./components/nav_ber/NavBar";
import "./App.css";
import Footer from "./components/footer/Footer";
import MainStore, { Items } from "./Store/MainStore";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";


function App() {
  //let { isLoading, error } = useContext(Items);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <MainStore>
      <div className="app">
        <NavBar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </MainStore>
  );
}

export default App;
