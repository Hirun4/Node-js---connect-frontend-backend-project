// import React from 'react'

const App = () => {


  const getUser = () => {
    fetch("http://localhost:3000/api/user")
    .then(res => res.json())
    .then(json => console.log(json))
  }


  return (
    <div>
      app
    </div>
  )
}

export default App
