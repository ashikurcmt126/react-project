import {increment_value, decrement_value } from "../type";

const initialState = {
    count: 5
}

export default function foo(state = initialState, action){
    switch(action.type){
        case increment_value:
            return{
                ...state,    //copy state here
                count: state.count + action.payload
            }
        
        case decrement_value:
            return{
                ...state,
                count: state.count - action.payload
            }
        default:
            return state;
    }
}