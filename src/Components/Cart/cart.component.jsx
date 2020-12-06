import React from "react";
import "./cart.style.css";
import { cartItemContext } from "../context/cartItemContext";
import DeleteIcon from "@material-ui/icons/Delete";

const Cart = () => {
  let cartItem = React.useContext(cartItemContext);
  let items = cartItem.cartState.items;
  let [placeOrder, setPlaceOrder] = React.useState("Place Order");

  const removeItemFromCart = (image) => {
    cartItem.cartItemdispatch({
      type: "REMOVE_FROM_CART",
      item: image
    });
  };

  const removeAllItems = () => {
    cartItem.cartItemdispatch({
      type: "REMOVE_ALL_ITEM"
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div className="cart-image" key={item.id}>
              <img src={item.url} alt="hello" />
              <span>
                <DeleteIcon
                  onClick={() => {
                    removeItemFromCart(item);
                  }}
                />
              </span>
            </div>
          ))}

          <div>
            <h3>
              Total amount :{" "}
              {(items.length * 5.99).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </h3>
            <button
              onClick={() => {
                setPlaceOrder("Ordering...");
                setTimeout(function () {
                  console.log("Order Placed");
                  removeAllItems();
                }, 3000);
              }}
            >
              {placeOrder}
            </button>
          </div>
        </div>
      ) : (
        <div>Cart Is Empty! Fill it up :) </div>
      )}
    </div>
  );
};

export default Cart;
