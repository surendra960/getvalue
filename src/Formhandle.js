import React from 'react'
import { useState } from 'react';

export default function Formhandle() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest,setInterest] =useState();
  function getFormData(e){
    console.warn(name,tnc,interest);
    e.preventDefault();
  }

  function nameChange(e){
    setName(e.target.value);
    // alert(e.target.value)
  }
  return (
    <div className="App">
      <h1>Handle Form In React</h1>
      <form action="" onSubmit={getFormData}>
        <input type="text" placeholder='Enter name' value={name}  onChange={nameChange}/><br/><br/>
        <select onSubmit={getFormData} name="" id="" onChange={(e)=>setInterest(e.target.vaule)}>
          <option value="">Select Options</option>
          <option value="">Marvel</option>
          <option value="">DC</option>
        </select><br/><br/>
        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms & Condtion</span>
        <br/><br/>
        <button type='submit'>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  )
}
