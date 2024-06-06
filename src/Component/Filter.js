import React from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'

function Filter() {
    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    console.log(searchParams.get('age'));
  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is :{age}</h3>
      <button onClick={()=>setSearchParams({age:45})}>Set Age in Query Params</button>
      <button onClick={()=>navigate('/')}>Go to Home page</button>
    </div>
  )
}

export default Filter
