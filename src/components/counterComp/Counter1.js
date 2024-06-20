import React, { useState } from 'react'
import "./counter1.css"

export default function Counter1() {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const handleIncr = () => {
    setCount(count + 1);
  };
  const handleDecr = () => {
    setCount(count - 1);
  };

  return (
    <div className='counterWrapper'>
      <h3>{count}</h3>
      <button className='btn' onClick={handleDecr}> - </button>
      <button onClick={handleIncr}> + </button>
    </div>
  )
}
