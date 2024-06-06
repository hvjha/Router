import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
   
  return (
    <div>
      <h1>Welcome to home page</h1>
      <p>This is the home page of this application </p>
      <p>Here you see the vision of my company</p>
      <Link to="/about">Go to About Page</Link>
      <div>
      <button onClick={()=>navigate('/about')}>Go to about page</button>
      </div>
      <div>
      <button onClick={()=>navigate('/filter')}>Go to filter page</button>
      </div>
      
    </div>
  )
}

export default Home
