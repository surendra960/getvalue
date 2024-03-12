import React from 'react'
import { useState } from 'react'

export default function Controlledcomponent() {
  let [val, setValu] = useState("")
  let [item, setItem] = useState("")
  function changeItem(e){
    setItem(e.target.value);
  }
  return (
    <div>
      <h1>Controlledcomponent</h1>
      <br />
      <input type='text' value = {val} onChange={(e)=>setValu(e.target.value)} /> 
      <h1>Set Item</h1>
      <input type='text' value = {item} onChange={changeItem} />
    </div>
  )
}
