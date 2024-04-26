//real
// import React, { useState, useEffect } from "react";
// import NavBar from "./components/nav_ber/NavBar";
// import "./App.css";
// import CarosuelPage from "./components/carousel/CarouselPage";
// import Card from "./components/card/Card";
// import Footer from "./components/footer/Footer";
// import CarouselMobile from "./components/carouselMobile/CarouselMobile";

// function App() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((jsonData) => {
//         setData(jsonData);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="app">
//       <NavBar />
//       <CarosuelPage />
//       <CarouselMobile/>

//       <div id="card-main">
//         {data &&
//           data.map((item) => (
//             <Card
//               key={item.id}
//               title={item.title}
//               description={item.description}
//               price={item.price}
//               category={item.category}
//               image={item.image}
//               rating={item.rating}
//             />
//           ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import NavBar from "./components/nav_ber/NavBar";
import "./App.css";
import CarosuelPage from "./components/carousel/CarouselPage";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import CarouselMobile from "./components/carouselMobile/CarouselMobile";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(4); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const loadMoreItems = () => {
    setDisplayedItems((prevCount) => prevCount + 4);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app">
      <NavBar />
      <CarosuelPage />
      <CarouselMobile />

      <div id="card-main">
        {data.slice(0, displayedItems).map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      {displayedItems < data.length && (
        <center>
          <button className="load-more-btn" onClick={loadMoreItems}>
            Load More
          </button>
        </center>
        // <LoadMore className="load-more-btn" onClick={loadMoreItems} ></LoadMore>
      )}

      <Footer />
    </div>
  );
}

export default App;
