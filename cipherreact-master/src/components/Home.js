import axios from 'axios'
import React, { useState } from 'react'

function Home() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [companyId, setcompanyId] = useState('');
  console.log(fname);
  const submit = ()=>{
    axios.post('http://localhost:3000/users',{
      "firstName":fname,
      "lastName":lname,
      "email":email,
      "age":age,
      "companyId":companyId
    }).then(function (response) {
      console.log(response);
    })
  }
  return (
    <div>
        <input placeholder='First Name' value={fname} onChange={(e)=>{setFname(e.target.value)}} />
        <input placeholder='Last Name' value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
        <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <input placeholder='Company ID' value={companyId} onChange={(e)=>{setcompanyId(e.target.value)}}/>
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Home