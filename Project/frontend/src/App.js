import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/products" element={<ProductList />} /> 
          <Route path="/addproduct" element={<NewProduct />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
