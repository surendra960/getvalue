import React, { useEffect } from 'react'
import Useeffect from './Useeffect'
import { useState } from 'react'

export default function Useeffectrestrict() {
  const [data, setData] = useState(100);
  const [total, setTotal] = useState(200);
  useEffect(()=>{
    console.log("this is useEffect");
  }, [data])
  return (
    <div>
      <h1>Data value {data}</h1>
      <h1>Data total {total}</h1>
      <button onClick = {()=>setData(data+1)}>change Data</button>
      <button onClick = {()=>setTotal(total+1)}>change total</button>
    </div>
  )
}
