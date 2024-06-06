import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>Welcome to About Page</h1>
      <p>This is the About page of this application </p>
      <p>Here you know about the company vision</p>
      <Link to="/">Go to Home Page</Link>
      <li><Link to="/user/anil">Anil</Link></li>
        <li><Link to="/user/mukesh">Mukesh</Link></li>
    </div>
  )
}

export default About
