import logo from './logo.svg';
import './App.css';
import UseCase1 from './components/UseCase1';
import UseCase2 from './components/UseCase2';
import UseCase3 from './components/UseCase3';
import UseCase4 from './components/UseCase4';
import Header from './components/website/Header';
import Slider from './components/website/Slider';
import Footer from './components/website/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
      {/* <UseCase1 />
      <UseCase2 /> 
      <UseCase3 />
  <UseCase4 /> */}
    </div>
  );
}

export default App;
