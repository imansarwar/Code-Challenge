import React, { useEffect, useReducer } from "react";
import "./styles.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Switch, Route, Link } from "react-router-dom";
import Photo from "./Components/Photos/photo.component";
import Cart from "./Components/Cart/cart.component";

import { valueContext } from "./Components/context/ValueContext";
import { cartItemContext } from "./Components/context/cartItemContext";
import dataReducer from "./Components/context/contextReducer";
import Badge from "@material-ui/core/Badge";

import cartItemReducer from "./Components/context/cartItemReducer";
export default function App() {
  const [state, dispatch] = useReducer(dataReducer, valueContext.data);

  const [cartState, cartItemdispatch] = React.useReducer(cartItemReducer, {
    items: []
  });

  useEffect(() => {
    dispatch({
      type: "FETCH_START"
    });
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          data
        });
      })
      .catch((e) => {
        dispatch({
          type: "FETCH_FAIL"
        });
      });
  }, []);

  if (state && state.isFetching && state.data.length > 1) {
    return (
      <valueContext.Provider value={state}>
        <cartItemContext.Provider value={{ cartState, cartItemdispatch }}>
          <div className="App">
            <div className="heading">
              <h1>IMAGES GALLERY</h1>
            </div>
            <div className="cart-box">
              <Link to="/"> Photos </Link>
              <Link to="/cart">
                <Badge
                  badgeContent={cartState.items.length}
                  showZero
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>{" "}
              </Link>
            </div>
            <Switch>
              <Route exact path="/">
                <Photo />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </cartItemContext.Provider>
      </valueContext.Provider>
    );
  } else if (state && state.isFetching && state.message) {
    return <div>{state.message}</div>;
  } else {
    return <div>Loading...</div>;
  }
}
