import React, { useState } from 'react';

export default function Hellow() {
  const [status, setStatus] = useState(true);
  function show(){
    
      if(status === true)
      setStatus(false)

      else
      setStatus(true);
  }
  return (
    <div>
      {
        status ? <h1>Hellow World</h1>  :  null
      }
      <button className='btn' onClick={show}>Show & Show</button>
    </div>
  )
}
