import React from 'react'

export default function User(props) {
  return (
    <div>
      <h1>Pass Fucntion as props</h1>
      <button onClick={()=>props.data()}>call dataa funtion</button>
    </div>
  )
}
