import React from 'react';
import { Table } from 'react-bootstrap';

export default function Nestedlistnestedarray() {
  const users = [
    { name: "anil",  email: "anil@test.com",   contact: 111 , address : 
    [{Hn : "10", city :"noida", country : 'india'},
    {Hn : "1110", city :"delhi", country : 'india'},
    {Hn : "12", city :"bundi", country : 'india'},
    {Hn : "41", city :"kota", country : 'india'}
  ] },
    { name: "sidhu", email: "shidu@test.com", contact: 993  , address : 
    [{Hn : "10", city :"noida", country : 'india'},
    {Hn : "1110", city :"delhi", country : 'india'},
    {Hn : "12", city :"bundi", country : 'india'},
    {Hn : "41", city :"kota", country : 'india'}
  ] },
    { name: "sam",   email: "sam@test.com",     contact: 2343 , address : 
    [{Hn : "10", city :"noida", country : 'india'},
    {Hn : "1110", city :"delhi", country : 'india'},
    {Hn : "12", city :"bundi", country : 'india'},
    {Hn : "41", city :"kota", country : 'india'}
  ] },
    { name: "peter", email: "peter@test.com", contact: 111 , address : 
    [{Hn : "10", city :"noida", country : 'india'},
    {Hn : "1110", city :"delhi", country : 'india'},
    {Hn : "12", city :"bundi", country : 'india'},
    {Hn : "41", city :"kota", country : 'india'}
  ] }
  ];
  return (
    <div>
      <h1>NestedListNestedArray</h1>
      <Table variant='dark'striped bordered hover> 
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Adress</td>
          </tr>
          {
            users.map((item,i)=>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.address.map((data)=>
                <tr>
                  <td>{data.Hn}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
                  }</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}
