import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../layout/layout";
import Home from "../../features/home/home";
import Cart from "../../features/cart/cart";
import Orders from "../../features/orders/orders";
import { getItemsTotal } from "../../shared/moneyUtils";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highestOrderRef: 1,
    };
  }

  handlePlaceOrder() {
    var items = this.state.cart.slice();

    var newOrder = {
      ref: this.state.highestOrderRef + 1,
      datePlaced: new Date().toISOString().slice(0, 10),
      items,
      total: getItemsTotal(items),
    };

    this.setState({
      orders: [...this.state.orders, newOrder],
      cart: [],
      highestOrderRef: newOrder.ref,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              index
              element={
                <Home
                  products={this.state.products}
                  onAddToCart={(sku, quantity) =>
                    this.props.addToCart(sku, quantity)
                  }
                />
              }
            />
            <Route path="cart" element={<Cart items={this.state.cart} />} />
            <Route
              path="orders"
              element={<Orders orders={this.state.orders} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
