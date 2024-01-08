import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Login from './Pages/login';
import Register from './Pages/Register';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import UserList from './Pages/UserList';
import Details from './Pages/Details';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<UserList />}/>
          <Route path='/users/:id' element={<Details />} />

          <Route path='*' element={<PageNotFound />} />
          {/* Make sure this route must be the last route of your routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
