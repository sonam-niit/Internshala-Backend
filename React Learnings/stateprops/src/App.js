import logo from './logo.svg';
import './App.css';
import UseCase1 from './components/UseCase1';
import UseCase2 from './components/UseCase2';
import UseCase3 from './components/UseCase3';
import UseCase4 from './components/UseCase4';
import UseCase5 from './components/UseCase5';
import UseCase6 from './components/UseCase6';
import { useState } from 'react';
import UseCase7 from './components/UseCase7';
import UseCase8 from './components/UseCase8/UseCase8';
import UseCase9 from './components/UseCase9';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* <UseCase1 />
      <UseCase2 />
      <UseCase3 />
      <UseCase4 />
      <UseCase5 /> */}
      <UseCase6 name="Sonam Soni" message="React is a very Aweesome Library" />
      <button>{isLoggedIn ? 'Logout' : 'Login'}</button>
      <UseCase7 setIsLoggedIn={setIsLoggedIn} />
      {/* From Parent Pass The Function as Props */}
      <UseCase8 />
      {/* Reusability of Component */}
      <UseCase9 name="print" onclick={() => alert("Print Button clicked")} />
      <UseCase9 name="hello" onclick={() => alert("Hello Button clicked")} />
      <UseCase9 name="World" onclick={() => alert("World Button clicked")} />
    </div>
  );
}

export default App;
