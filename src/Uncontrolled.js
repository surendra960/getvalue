import React, {useRef} from 'react'

export default function Uncontrolled() {
  let inputRef = useRef("null")
  let inputRef2 = useRef("null")
  function submitForm(e){
    e.preventDefault();
    console.warn("input field 1 value :", inputRef.current.value );
  }
  return (
    <div>
      <br/><br/>
      <h1>Uncontrolled</h1>
      <form onSubmit={submitForm} action="">
        <input ref = {inputRef} type="text" /><br/><br/>
        <input ref = {inputRef2} type="text" /><br/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}
