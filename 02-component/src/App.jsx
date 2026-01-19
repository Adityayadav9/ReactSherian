// import { useState } from 'react'
import Card  from './components/Card'
import Navbar from './components/Navbar'
import Home  from './components/Home'


import './index.css'

function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
     <div className="parent">
      
      <Card   user= 'Aditi' age={24} city='Delhi'  img='https://images.unsplash.com/photo-1715772605517-8c1e09dc31f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user = 'anurag' age={67} img='https://images.unsplash.com/photo-1764990189201-8025ff64d981?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user ='sakshi' age={19} img='https://images.unsplash.com/photo-1763987300719-fd27c51a3227?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      
      </div>
      
    </>
  )
}

export default App
