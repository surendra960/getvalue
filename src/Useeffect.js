import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

export default function Useeffect() {
const [data, setData] = useState(0);

function func(){
 setData(data+1);
}

  useEffect(()=>
  {
    console.warn("useEffect");
  })

  return (
    <div>
      <h1>Useeffect in react = {data}</h1>
      <button onClick={func}>Update Counter</button>
    </div>
  )
}
