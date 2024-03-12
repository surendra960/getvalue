import React, { forwardRef } from 'react'
// import { forwardRef } from 'react'

 function Inputbox(props,ref) {
  return (
    <div>
      <input type = "text" ref={ref}/>

    </div>
  )
}

export default forwardRef(Inputbox)