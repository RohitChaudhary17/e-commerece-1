import { useContext } from "react";
import { Items } from "../Store/MainStore";
import Card from "./card/Card";
import CardMobile from "./card/CardMobile";
import CarouselMobile from "./carouselMobile/CarouselMobile";
import CarouselPage from "./carousel/CarouselPage";
import CardDetails from "./card/CardDetails";

const Home = () => {
  let {
    displayedItems,
    data,
    loadMoreItems,
    loadLessItems,
    selectedCard,
    handleCardClick,
    AddItems,
  } = useContext(Items);

  return (
    <div>
      <CarouselPage></CarouselPage>
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
            onClick={() => handleCardClick(item)}
            //onCardClick={() => setSelectedCard(item)} // Handle card click here
            handleOnClick={() => AddItems(item)}
          />
        ))}
      </div>

      {displayedItems < data.length && (
        <center>
          <button className="load-more-btn" onClick={loadMoreItems}>
            Load More
          </button>
        </center>
      )}

      {displayedItems === data.length && (
        <center>
          <button className="load-less-btn" onClick={loadLessItems}>
            Load Less
          </button>
        </center>
      )}

      <CardMobile data={data} />
    </div>
  );
};

export default Home;
