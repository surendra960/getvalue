// import React from 'react'

// export default function Suri() {
//   function getVal(val){
//     console.log(val.target.value)
//   }
//   return (
//     <div>
//       <input type="text" id='btn' />
//       <button id='btn' onClick={getVal}>Click Me</button>
//     </div>
//   )
// }
import React, { useState } from 'react';

export default function Suri() {
  const [inputValue, setInputValue] = useState('');

  function getVal() {
    console.log(inputValue);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button id='btn' onClick={getVal}>Click Me</button>
    </div>
  );
}
