import React, { useState } from 'react';
import Suri from './Suri';
import Hellow from './Hellow';
import './App.css';
import Formhandle from './Formhandle';
import Profile from './Profile';
import Login from './Login';
import User from './User';
import Members from './Members';
import Useeffect from './Useeffect';
import Useeffectrestrict from './Useeffectrestrict';
import Bootstrapuse from './Bootstrapuse';
import Maparrayobj from './Maparrayobj';
import Bootstraplisttable from './Bootstraplisttable';
import Nestedlistnestedarray from './Nestedlistnestedarray';
import Componentreuse from './Componentreuse';
import Useref from './Useref';
import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Inputbox from './Inputbox';
import Controlledcomponent from './Controlledcomponent';
function App() {
  const [value, setValue] = useState('');

  function getData(event) {
    setValue(event.target.value);
  }

  function remove() {
    setValue('');
  }
  function getDataa(){
    alert("hello from app")
  }
  let inputRef = useRef(null);
  function updateInput(){
    inputRef.current.value = "1000"
  }

  return (
    <div className="App">
      <h1>Get Input box value!</h1>
      <input type="text" onChange={getData} value={value} />
      <button onClick={remove}>Remove</button>
      <Suri />
      <Hellow />
      <Formhandle />
      <Profile/>
      <Login/>
      <User data= {getDataa}/>
      <div style = {{float:'right'}}>
        <Members data ={getDataa}/>
        </div>
        <User data= {getDataa}/>
        <User data= {getDataa}/>
        <User data= {getDataa}/>
        <Useeffect/>
        <Useeffectrestrict/>
        <Bootstrapuse/>
        <Maparrayobj/>
        <Bootstraplisttable/>
        <Nestedlistnestedarray/>
        <Componentreuse/>
        <Useref/>
        <h1>ForwardRef in React </h1>
        <Inputbox ref = {inputRef}/>
        <Button onClick={updateInput}>Update InputBox</Button>
         <Controlledcomponent/>
    </div>
  );
}

export default App;
