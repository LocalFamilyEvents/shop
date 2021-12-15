import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout/layout';
import Header from './Header/header';
import Footer from './Footer/footer';
import HomePage from './Pages/HomePage/homepage';
import CartPage from './Pages/CartPage/cartpage';
import OrdersPage from './Pages/OrdersPage/orderspage';

import './index.css';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highestOrderRef: 1,
            products: [
                {
                    sku: 123,
                    name: 'Ski boots',
                    price: 1.99
                }
            ],
            cart: [
                { 
                    sku: 123,
                    name: 'Ski boots',
                    quantity: 1,
                }
            ],
            orders: [
                {
                    ref: 1,
                    datePlaced: '2021-12-14',
                    items: [
                        { 
                            sku: 123,
                            name: 'Ski boots',
                            quantity: 1,
                        },
                        { 
                            sku: 243,
                            name: 'Ski mask',
                            quantity: 1,
                        }
                    ]
                }
            ]
        }
    }

    handlePlaceOrder() {
        var newOrder = {
            ref: this.state.highestOrderRef + 1,
            datePlaced: new Date().toISOString().slice(0,10),
            items: this.state.cart.slice()
        };

        this.setState({
            orders: [...this.state.orders, newOrder],
            cart: [],
            highestOrderRef: newOrder.ref
        })
    }

    handleDeleteCartItem(item) {
        var cartItems = this.state.cart.slice().filter((ci) => ci.sku !== item.sku);
        this.setState({ cart: cartItems });
    }

    handleAddToCart(sku) {
        console.log('add sku ' + sku + ' to cart');
        var product = this.state.products.filter((p) => p.sku === sku);
        if (!product) {
            return;
        }

        var inCart = this.state.cart.filter((i) => i.sku === sku);

        if(inCart.length > 0) {
            var newQuantity = inCart[0].quantity + 1;
            var newCart = this.state.cart.map(ci => (ci.sku === sku ? {...ci, quantity: newQuantity } : ci));
            this.setState({ cart: newCart });
        } else {
            var itemName = this.state.products.filter((p) => p.sku === sku)[0].name;
            var newItem = {
                sku: sku,
                name: itemName,
                quantity: 1,
            };

            this.setState({cart: [...this.state.cart, newItem]})
        }
    }

    render() {
        const cartItemCount = this.state.cart.length;
        const ordersCount = this.state.orders.length;

        return (
            <Layout>
                <BrowserRouter>
                    <Header cartItemCount={cartItemCount} ordersCount={ordersCount} />
                    <Routes>
                        <Route index element={<HomePage products={this.state.products} onAddToCart={(sku) => this.handleAddToCart(sku)} />} />
                        <Route path="cart" element={
                            <CartPage 
                                items={this.state.cart} 
                                onDeleteItem={(i) => this.handleDeleteCartItem(i)}
                                onPlaceOrder={() => this.handlePlaceOrder()}
                             />} 
                        />
                        <Route path="orders" element={<OrdersPage orders={this.state.orders} />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </Layout>
        );
    }
}

ReactDOM.render(<Shop />, document.getElementById("root"));