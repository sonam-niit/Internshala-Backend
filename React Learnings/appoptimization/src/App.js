import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));

const LoadingFallback=()=><p>Loading Page..</p>;

function App() {

  return (
    <Router>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;






// import { useCallback, useMemo, useState } from 'react';
// import './App.css';
// import ChildComponent from './components/ChildComponent';
// import FormComponent from './components/FormComponent';

// const calculation=(count)=>{
//     for(let i=0;i<1000000000;i++){} //some delay lengthy calc
//     return count *3;
// }
// function App() {

//   const [input,setInput]=useState("");
//   const [count,setCount]=useState(0);
//   const incrementCount=()=>setCount(count+1)
//   //  useCallback(()=>setCount(count+1),[count])
//     const myCount=calculation(count);//chnage in input
//  // const myCount= useMemo(()=>calculation(count),[count]);
//   return (
//     <div className="App">
//       <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
//       <button onClick={()=>setCount(count+1)}>Increment Counter</button>
//       <h3>Input {input}</h3>
//       <h3>count: {count}</h3>
//       <h3>Count * 3= {myCount}</h3> 
//       <hr/>
//       <ChildComponent count={count} setCount={incrementCount} />
//         {/* <FormComponent />
//         <ChildComponent /> */}
//     </div>
//   );
// }

// export default App;
