import React from "react";
import PropTypes from "prop-types";
import "./photoBox.style.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const PhotoBox = ({
  photo,
  toggleFavourite,
  addItemToCart,
  removeItemFromCart,
  cartItem
}) => {
  const [hover, setHover] = React.useState(false);

  const Onhover = () => {
    setHover(true);
  };

  const onhoverOut = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={Onhover}
      onMouseLeave={onhoverOut}
      className="imgContainer"
    >
      <img src={photo.url} alt="data containing image" />

      <div>
        {photo.isFavorite ? (
          <span
            className="heart"
            onClick={() => {
              toggleFavourite(photo.id);
            }}
          >
            <FavoriteIcon className="heart-shadow" />
          </span>
        ) : null}

        {hover && !photo.isFavorite ? (
          <span
            className="heart"
            onClick={() => {
              toggleFavourite(photo.id);
            }}
          >
            <FavoriteBorderIcon />
          </span>
        ) : (
          <span />
        )}

        {cartItem.items.filter((item) => item.id === photo.id).length > 0 ? (
          <span className="plus" onClick={() => removeItemFromCart(photo)}>
            <ShoppingCartIcon className="cart-shopping" />{" "}
          </span>
        ) : null}

        {hover &&
        cartItem.items.filter((item) => item.id === photo.id).length < 1 ? (
          <span className="plus" onClick={() => addItemToCart(photo)}>
            <AddCircleOutlineIcon />{" "}
          </span>
        ) : null}
      </div>
    </div>
  );
};

PhotoBox.protoTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  className: PropTypes.string,
  photo: PropTypes.object,
  id: PropTypes.string,
  url: PropTypes.string,
  isFavorite: PropTypes.string
};

export default PhotoBox;
