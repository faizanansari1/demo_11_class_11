import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./Component/About";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Product from "./Component/Product";
import ProductItem from "./Component/ProductItem";

function RouteConfig() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={ProductItem} />
          <Route path="*" component={() => <h2>404 Not Found</h2>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RouteConfig;
