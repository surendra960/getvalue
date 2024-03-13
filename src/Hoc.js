import React, {useRef, useState} from 'react'

export default function Hoc() {
  return (
    <div>
      <h1>Higher order component</h1>
      <Counter/>
      <HOCRed cmp = {Counter}/>
      <HOCblue cmp = {Counter}/>
      <HOCgreen cmp = {Counter}/>
    </div>
  )
}

function HOCRed(props){
  return <h2 style={{backgroundColor :'red', width:100}}><props.cmp/></h2>
}
function HOCblue(props){
  return <h2 style={{backgroundColor :'blue', width:100}}><props.cmp/></h2>
}
function HOCgreen(props){
  return <h2 style={{backgroundColor :'green', width:100}}><props.cmp/></h2>
}

function Counter(){
  let [count,setCount] = useState(0);
function countUpdate(){
  setCount(count+1);
}
  return(
    <div>
      <h3>{count}</h3>
       <button onClick = {countUpdate}>Update</button>
    </div>
  )
}
