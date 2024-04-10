import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  return (
    <>
      <Header />
      <Products/>
      <Cart />
    </>
  );
}

export default App;
