import React, { useState } from 'react'
import Navbar from "./Components/Navbar.jsx"
import Newsboard from './Components/Newsboard.jsx' 
const App = () => {
  const [category, setcategory] =useState("general") 
  return (
    <div>
       <Navbar setcategory={setcategory}/>
       <Newsboard category={category}/>
    </div>
  )
}

export default App
