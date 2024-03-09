import React from 'react'

export default function Members(props){

  return(
    <>
    <h1>This is from Member Component</h1>
      <button onClick={props.data}>Alert</button>
    </>
  )
}