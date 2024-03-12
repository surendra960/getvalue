import React from 'react'
import { useRef } from 'react'
import { Button } from 'react-bootstrap'

export default function () {
  let inputRef=useRef(null)
  function handleInput(){
    // alert("Button Clicked")
    inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.style.color ="red";
  }
  return (
    <div>
      <h1>
        UseRef Hook for DOM manipulation
      </h1>
      <input type="text" ref ={inputRef}/><br/>
      <Button onClick ={handleInput}>Handle Input</Button>
    </div>
  )
}
