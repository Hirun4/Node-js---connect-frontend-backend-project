// import React from 'react'
import { useEffect, useState } from "react"

const App = () => {

  const [user,setUser] =  useState([])

  const getUser = () => {
    fetch("http://localhost:3000/api/user")
    .then(res => res.json())
    .then(json => setUser(json))
  }

  useEffect(() => {
    getUser()
  },[])


  return (
    <div>
      {user.map((data) => {
        return <>
        <div>
            <h1>name: {data.name}</h1>
            <h1>Username: {data.username}</h1>
            <h1>Email: {data.email}</h1>

        </div>
        
        
        </>
      })}
    </div>
  )
}

export default App
