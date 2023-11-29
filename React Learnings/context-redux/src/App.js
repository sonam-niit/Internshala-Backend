import logo from './logo.svg';
import './App.css';
import GrandParent from './components/usecase1/GrandParent';
import MyGrandParent from './components/UseCase2/MyGrandParent';
import UserInfo from './components/useCase3/UserInfo';
import { AuthProvider } from './components/useCase3/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* UseCase1 */} <GrandParent />
        {/* UseCase2 with Context */} <MyGrandParent />
        {/* UseCase3 with React time example of COntext */}

        <h1>Authetication App</h1>
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
