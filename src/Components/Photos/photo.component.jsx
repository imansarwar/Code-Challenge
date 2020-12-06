import React from "react";
import "./component.css";
import { valueContext } from "../context/ValueContext";
import { cartItemContext } from "../context/cartItemContext";
import PhotoBox from "./photoBox.component";

import favouriteItemReducer from "../context/favouriteItemReducer";

const Photo = () => {
  let dataOfPhotos = React.useContext(valueContext);
  let cartItem = React.useContext(cartItemContext);
  let dataArray = dataOfPhotos.data;

  const [favourite, favouritedispatch] = React.useReducer(
    favouriteItemReducer,
    dataArray
  );

  const addItemToCart = (image) => {
    cartItem.cartItemdispatch({
      type: "ADD_TO_CART",
      item: image
    });
  };

  const removeItemFromCart = (image) => {
    console.log(image, "but", cartItem);
    cartItem.cartItemdispatch({
      type: "REMOVE_FROM_CART",
      item: image
    });
  };

  const toggleFavourite = (id) => {
    favouritedispatch({
      type: "TOGGLE_FAVOURITE",
      id
    });
  };

  return (
    <div>
      <h2 className="photo-comp">IMAGE COMPONENTS</h2>

      <div className="imagesContainer">
        {favourite.map((photo, id) => (
          <PhotoBox
            photo={photo}
            removeItemFromCart={removeItemFromCart}
            addItemToCart={addItemToCart}
            toggleFavourite={toggleFavourite}
            cartItem={cartItem.cartState}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Photo;
