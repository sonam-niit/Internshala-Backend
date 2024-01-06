import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import ToggleDemo from './components/ToggleDemo';
import Todo from './components/Todo';
import PropsDemo1 from './components/PropsDemo1';
import PropsDemo2 from './components/PropsDemo2';
import { useState } from 'react';
import PropsDemo3 from './components/PropsDemo3';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="App">
      <button>{isLoggedIn?'Logout':'Login'}</button>
      <Counter />
      <UserForm />
      <ToggleDemo />
      <Todo />
      <PropsDemo3 setIsLoggedIn={setIsLoggedIn} />
      <PropsDemo2 name="test" title="testing" />
      <PropsDemo1 name="Sonam" message={67} />
      <PropsDemo1 name="Pooja" message="Good Afternoon" />
      <PropsDemo1 />
    </div>
  );
}

export default App;
