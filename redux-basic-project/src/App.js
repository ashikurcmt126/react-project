import React from 'react'
import {increase, decrease} from './action'
import {useSelector, useDispatch } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  const totalCounter = useSelector((c)=>c.count);
  const dispatch = useDispatch()
  return (
    <div className="App text-center">
      <h1>Welcome to Redux</h1>
      <h3>Couner: {totalCounter}</h3>
      <button onClick={()=>dispatch(increase())}>+ Increment</button> &nbsp;
      <button onClick={()=>dispatch(decrease())}>- Decrement</button>
    </div>
  );
}

export default App;
