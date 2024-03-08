// import React from 'react';
// import Suri from './Suri';
// import Hellow from './Hellow';
// import './App.css';
// import Formhandle from './Formhandle';
// import { useState } from 'react';
// function App() {
//   const [value, setValue] = useState('');
//   function getData(val){
//     console.warn(val.target.value)

//   }
//   function remove(){
//     setValue('');
//   }
//   return (
//     <div className="App">
//      <h1>Get Input box value !</h1>
//      <input type="text" onChange={getData} value = {value} />
//      <button onClick={remove}>Remove</button>
//      <Suri/>
//      <Hellow/>
//      <Formhandle/>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Suri from './Suri';
import Hellow from './Hellow';
import './App.css';
import Formhandle from './Formhandle';

function App() {
  const [value, setValue] = useState('');

  function getData(event) {
    setValue(event.target.value);
  }

  function remove() {
    setValue('');
  }

  return (
    <div className="App">
      <h1>Get Input box value!</h1>
      <input type="text" onChange={getData} value={value} />
      <button onClick={remove}>Remove</button>
      <Suri />
      <Hellow />
      <Formhandle />
    </div>
  );
}

export default App;
