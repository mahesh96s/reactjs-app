import { useContext } from "react";
import FavoritesContext from "../components/store/favorites-context";
import MeetupList from "../components/meet-ups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (!favoritesCtx.totalFavorites) {
    content = <p>No Favorites found</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }
    return (
      <div>
        <h2>My favorite</h2>
        {content}
      </div>
    );
  }
  
  export default Favorites;
  