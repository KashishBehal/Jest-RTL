import React from 'react'
import { useState } from 'react'

function Counter ({initialCount})  {
    const [state ,setState]=useState(initialCount);
   
     const Increment=()=>{
        setState((prop)=>prop+1);
        requestIdleCallback(()=>{console.log("hello there React Fiber!!");});
      }
      const Decrement=()=>{
        setState((prop)=>prop-1);
      }
      const Restart=()=>{
        setState(0);
      }
      const Switch=()=>{
        setState((prop)=>prop*-1);
       
      }
  return (
    <div className="App">
    <h1 >React Fiber Scheduling Example</h1>
    <h1>Count :
        <h3 data-testid="count">{state}</h3></h1>
   <div className='a'> <button onClick={Increment}>Increment  </button>
    <br/>
    <br/>
    <button onClick={Decrement}>Decrement</button>
    <br/>
    <br/>
    <button onClick={Restart}>Restart</button>
    <br/>
    <br/>
    <button onClick={Switch}>Switch Count </button></div>
   </div>
  )
}
export default Counter;