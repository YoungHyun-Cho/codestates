import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const handleCart = (itemId) => {
    setCartItems([ ...cartItems, { itemId, quantity: 1 } ]);
  };

  const deleteCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.itemId !== itemId));
  };

  const handleQuantity = (quantity, itemId) => {
    let quantityChanged = cartItems.map(item => item.itemId === itemId ? item.quantity = quantity : item.quantity);
    setCartItems(quantityChanged);
  };

  return (
    <Router>
      <Nav count={cartItems.length} />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} handleCart={handleCart} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} deleteCart={deleteCart} handleQuantity={handleQuantity} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
