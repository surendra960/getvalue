import React from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

import './App.css';

export default function BootstraplistTable() {
  const users = [
    { name: "anil",  email: "anil@test.com",   contact: 111 , address : "XYZ1" },
    { name: "sidhu", email: "shidu@test.com", contact: 993  , address : "XYZ1"},
    { name: "sam",   email: "sam@test.com",     contact: 2343 , address : "XYZ1" },
    { name: "peter", email: "peter@test.com", contact: 111 , address : "XYZ1"}
  ];
  
  return (
    <div>
      <h1>BootstraplistTable</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Table striped variant='dark'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            item.contact === 111?
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.address}</td>
            </tr> : null
          ))}
        </tbody>
      </Table>
    </div>
  )
}
