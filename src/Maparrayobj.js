// import './App.css';
// import React from 'react'

// export default function Maparrayobj() {
//   const students =[{name :"anil", email : "anil@test.com", contact:993},
//   {name :"sidhu", email : "shidu@test.com", contact:993},
//   {name :"sam", email : "sam@test.com", contact:2343},
//   {name :"peter", email : "peter@test.com", contact:993}
// ]
//   return (
//     <div>
//       <h1>Handling Map Array Object and table</h1>
//       <table border="1" className='center'>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//         </tr>
//         {
//           students.map((data)=>
//           <tr>
//             <td>{data.name}</td>
//             <td>{data.email}</td>
//             <td>{data.contact}</td>
//           </tr>)
//         }
//       </table>
//     </div>
//   )
// }
import React from 'react';

const students = [
  { name: "anil", email: "anil@test.com", contact: 993 },
  { name: "sidhu", email: "shidu@test.com", contact: 993 },
  { name: "sam", email: "sam@test.com", contact: 2343 },
  { name: "peter", email: "peter@test.com", contact: 993 }
];

function Maparrayobj() {
  return (
    <div>
      <h1>Handling Map Array Object and Table</h1>
      <table className='center' border={1}>
        <thead>
          <tr border="1">
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td border={1}>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Maparrayobj;
