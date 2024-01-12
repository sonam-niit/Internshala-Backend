import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const InputComp = React.lazy(() => import('./Components/InputComp'));
const Memoization = React.lazy(() => import('./Components/Memoization'));
const UseMemo = React.lazy(() => import('./Components/UseMemo'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/input">Input Comp</Link>
        <Link to="/memo">Memoization</Link>
        <Link to="/usememo">Use Memo Demo</Link>
      </div>
      <Routes>
        <Route path='/input' element={
          <Suspense fallback={<p>Loading Component</p>}>
            <InputComp />
          </Suspense>
        } />
        <Route path='/memo' element={
          <Suspense fallback={<p>Loading Component</p>}>
            <Memoization/>
          </Suspense>
        } />
        <Route path='/usememo' element={
          <Suspense fallback={<p>Loading Component</p>}>
          <UseMemo />
        </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
