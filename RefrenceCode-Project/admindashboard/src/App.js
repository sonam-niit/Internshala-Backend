import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/login';
import AdminDashboard from './components/AdminDahsboard';
import ManageProducts from './components/ManageProducts';
import ManageUsers from './components/ManageUsers';

function App() {
  return (
      <Router>

        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/admin' element={<AdminDashboard />} >
             <Route path='products' element={<ManageProducts />} ></Route>
             <Route path='users' element={<ManageUsers />} ></Route>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
