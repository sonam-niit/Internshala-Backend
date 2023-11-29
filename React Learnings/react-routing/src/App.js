import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Header from './components/common/header';
import Details from './components/Details';
import NoMatch from './components/NoMatch';
import AllUsers from './components/AllUsers';
import NewUser from './components/Users/NewUser';
import UserDetails from './components/Users/UserDetials';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/users' element={<AllUsers />}>
            <Route path='new' element={<NewUser />}/>
            <Route path=':userId' element={<UserDetails />}/>
          </Route>
          <Route path='/details/:pid' element={<Details />} /> 
          {/* Dynamic routes changes based on Id, pid is the variable name which you will read
          in details component */}
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
