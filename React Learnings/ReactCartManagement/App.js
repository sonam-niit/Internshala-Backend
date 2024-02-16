import logo from './logo.svg';
import './App.css';
import GrandParent from './components/UseCase1/GrandParent';
import { useState } from 'react';
import MyGrandParent from './components/useCase2/MyGrandParent';
import ThemeContextProvider from './components/useCase3/themeContext';
import ThemeUsage from './components/useCase3/ThemeUsage';
import Header from './components/Bootstrap/Header';
import Products from './components/CartManage/Products';
import Cart from './components/CartManage/Cart';

function App() {

  const [cart,setCart]= useState([]);

  return (
    <div>
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default App;
