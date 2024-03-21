import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
       <div>
          <Link to="/Home">Home Page</Link>
          <Link to="/About">About Page</Link>
        </div>
  )
}
