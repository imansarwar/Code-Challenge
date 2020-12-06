import React from "react";
import "./styles.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Switch, Route, Link } from "react-router-dom";
import Photo from "./Components/Photos/photo.component";
import Cart from "./Components/Cart/cart.component";

import ContextProvider from "./Components/context/ValueContext";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Link to="/">Pic Some </Link>
        <Link to="/cart">
          <ShoppingCartIcon />{" "}
        </Link>

        <Switch>
          <Route exact path="/">
            <Photo />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </ContextProvider>
  );
}
