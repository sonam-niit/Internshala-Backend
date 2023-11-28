import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Header from './components/common/header';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/details/:pid' element={<Details />} /> 
          {/* Dynamic routes changes based on Id, pid is the variable name which you will read
          in details component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
