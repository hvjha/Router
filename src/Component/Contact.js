import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Hello,This is Contact Page</p>
      <p>We are group of Developer</p>
      <Link to="company">Company</Link>
      <Link to="channel">Channel</Link>
      <Link to="other">Other</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
