import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./components/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
