import React, { useState } from 'react';
import GrandParent from './components/UseCase1/GrandParent';
import MyGrandParent from './components/UseCase2/MyGrandParent';
import CounterComponent from './components/Redux/components/CounterComponent';
import Cart from './components/Redux/components/Cart';
import { useSelector } from 'react-redux';

function App() {
  const [data,setData]= useState("Hello From App Component");
  const items= useSelector(state=>state.itemReducer.items)
  return (
    <div>
      <h3>Items in my Cart: {items.length}</h3>
      {/* <GrandParent data={data} /> */}
      {/* <MyGrandParent /> */}
      <CounterComponent />
      <Cart />
    </div>
  );
}

export default App;
