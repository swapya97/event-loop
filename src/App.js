import './App.css';
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log('Button clicked');
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}