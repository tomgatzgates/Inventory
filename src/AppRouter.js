import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsContainer from "./screens/products/ProductsContainer";
import ProductContainer from "./screens/products/ProductContainer";
import CreateProductContainer from "./screens/products/CreateProductContainer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/products/new" component={CreateProductContainer} />
        <Route exact path="/products/:productId" component={ProductContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
