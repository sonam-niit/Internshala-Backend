import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddProduct from "./pages/addProduct";
import Products from "./pages/products";
import PrivateRoute from "./components/PrivateRoute";
import AuthService from "./components/AuthService";

function App() {
  return (
    <Router>
      <div className="container">
        <ToastContainer />
        <Routes>
          {/* <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path='/dashboard' isAuthenticated={true}>
            <Route index element={<Dashboard />} />
          </PrivateRoute> */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
