import { createContext, useEffect, useReducer, useState } from "react";

export let Items = createContext({
  data: [{}],
  isLoading: Boolean,
  error: "",
  displayedItems: 0,
  selectedCard: [{}],
  loadMoreItems: () => {},
  loadLessItems: () => {},
  handleCardClick: () => {},
  BagItems: [],
  Wishlist: [],
  AddItems: () => {},
  AddItemsW: () => {},
});

let reducerAction = (currList, action) => {
  let newList = currList;
  if (action.type === "DELETE_ITEM") {
    newList = currList.filter((x) => x.id !== action.payload.itemid);
    console.log(`${action.payload.itemid}`);
  } else if (action.type === "Bagged") {
    if (!newList.includes(action.payload.post)) {
      newList = [action.payload.post, ...currList];
      console.log(newList);
    }
  } else if (action.type === "ADD_ITEMS") {
    newList = action.payload.posts;
  }
  return newList;
};

let reducerActionW = (currList, action) => {
  let newList = currList;
  if (action.type === "DELETE_ITEM") {
    newList = currList.filter((x) => x.id !== action.payload.itemid);
    console.log(`${action.payload.itemid}`);
  } else if (action.type === "Wishlist") {
    if (!newList.includes(action.payload.post)) {
      newList = [action.payload.post, ...currList];
      console.log(newList);
    }
  } else if (action.type === "ADD_ITEMS") {
    newList = action.payload.posts;
  }
  return newList;
};

const MainStore = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(4);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const loadLessItems = () => {
    setDisplayedItems(4);
  };

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  let [BagItems, dispatcher] = useReducer(reducerAction, []);
  let [Wishlist, dispatcherW] = useReducer(reducerActionW, []);

  const AddItems = (post) => {
    dispatcher({
      type: "Bagged",
      payload: {
        post,
      },
    });
  };

  const AddItemsW = (post) => {
    dispatcherW({
      type: "Wishlist",
      payload: {
        post,
      },
    });
  };

  return (
    <Items.Provider
      value={{
        data,
        isLoading,
        error,
        displayedItems,
        selectedCard,
        loadMoreItems,
        loadLessItems,
        handleCardClick,
        BagItems,
        Wishlist,
        AddItems,
        AddItemsW,
      }}
    >
      {children}
    </Items.Provider>
  );
};

export default MainStore;
