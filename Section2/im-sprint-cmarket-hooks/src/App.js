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
  const [noOverlap, setNoOverlap] = useState([]);

  const handleAdd = id => {
    if (noOverlap.indexOf(id) !== -1) return;
    setCartItems([...cartItems, { itemId: id, quantity: 1 }]);
    setNoOverlap([...noOverlap, id]);
  };

  const handleRemove = id => {
    setCartItems(cartItems.filter(item => item.itemId !== id))
    setNoOverlap(noOverlap.filter(item => item !== id));
    console.log("cart : ", cartItems);
  };

  const handleEachCount = (quantity, id) => {
    if (quantity < 1) return;
    const temp = cartItems.map(item => {
      if (item.itemId === id) item.quantity = quantity;
      return item;
    });
    setCartItems(temp);
  };

  return (
    <Router>
      <Nav count={cartItems.length} />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} onAdd={handleAdd}/>
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} handleRemove={handleRemove} handleEachCount={handleEachCount}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
