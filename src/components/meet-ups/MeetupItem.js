import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorites(props.meetup.id);

  function toggleFavorites() {
    if (itemIsFavorite) favoritesCtx.removeFavorites(props.meetup.id);
    else favoritesCtx.addFavorites(props.meetup);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.imageUrl} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorites}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
        <div className={props.meetup.active ? classes.active : classes.inactive}>
          <div>{props.meetup.active ? 'Active' : 'Inactive'}</div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
