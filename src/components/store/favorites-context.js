import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (meetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorites: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((prevFavorites) => prevFavorites.concat(favoriteMeetup));
  }

  function removeFavoritesHandler(favoriteMeetupId) {
    setUserFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== favoriteMeetupId)
    );
  }
  function itemIsFavoritesHandler(favoriteMeetupId) {
    return userFavorites.some((favorite) => favorite.id === favoriteMeetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
