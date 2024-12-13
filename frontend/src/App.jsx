// import React from 'react'
import { useEffect, useState } from "react"

const App = () => {

  const [user,setUser] =  useState([])

  const getUser = () => {
    fetch("/api/user")
    .then(res => res.json())
    .then(json => setUser(json))
  }

  useEffect(() => {
    getUser()
  },[])


  return (
    <div>
      app
    </div>
  )
}

export default App
