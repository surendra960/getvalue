// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap'

// export default function Bootstrapuse() {
//   return (
//     <div>
//     <h1>Install Bootstrap</h1>
//     <button onClick={()=>alert("hello")}>Click Me</button>
//     </div>
//   )
// }
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Bootstrapuse() {
  return (
    <div>
      <h1>Install Bootstrap</h1>
      {/* Replace the native HTML button with Bootstrap Button */}
      <Button onClick={() => alert("hello")}>Click Me</Button>
    </div>
  );
}
