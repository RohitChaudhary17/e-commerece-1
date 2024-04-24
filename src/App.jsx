
import React, { useState, useEffect } from 'react';
import NavBar from './components/nav_ber/NavBar';
import './App.css';
import CarosuelPage from './components/carousel/CarouselPage';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import sidebar from './components/nav_ber/sidebar';

function App() {
  
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
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

    <div id="card-main">
    {data && data.map((item) => (
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
    
    <Footer />

  </div>
  );
}

export default App;


































