import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../services/actions/CounterAction";

const CounterTwo = () =>{

    const count = useSelector(state=> state.counterReducer.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=>dispatch(increment(5))}>Increment</button> &nbsp;
            <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
        </div>
    );
}

export default CounterTwo;