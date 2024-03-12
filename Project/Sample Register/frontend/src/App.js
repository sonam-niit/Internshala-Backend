import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./components/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="register" element={<Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
