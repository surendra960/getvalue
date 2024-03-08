import React from 'react';
import Suri from './Suri';
import Hellow from './Hellow';
import './App.css';

function App() {
  function getData(val){
    console.warn(val.target.value)
  }
  return (
    <div className="App">
     <h1>Get Input box value !</h1>
     <input type="text" onChange={getData} />
     <Suri/>
     <Hellow/>
    </div>
  );
}

export default App;
