import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Sample from './components/Sample';
import UserList from './components/UserList';
import Counter from './components/Counter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React App</h1>
        <Header />
        <Counter />

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/sample' element={<Sample />}></Route>
        <Route path='/list' element={<UserList />}></Route>
      </Routes>

      {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
