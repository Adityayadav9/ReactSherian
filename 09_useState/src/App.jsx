import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function IncreaseNum(){
    setnum(num+1)
  }
function DecreaseNUm(){
  setnum(num-1);
}
function JumpBy5(){
  setnum(num+5);
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncreaseNum}>increase</button>
      <button onClick={DecreaseNUm}>decrease</button>
      <button onClick={JumpBy5}>Jump5</button>
      
    </div>
  )
}

export default App






























// import React, { useState } from 'react'

// const App = () => {
//   const[num , setnum] = useState(10)
//   const [username, setusername] = useState('adi')
//   const[users, setusers] = useState([10,20,30])
//   function changeNum(){
//     setnum(23)
//     setusername('yadav ji kripya apna phone uthaiye')
//     setusers([40,50,60]);
//   }


//   return (
//     <div>
//       <h1>the value of use state is {num} <br /> {users}</h1>
//       <h1>my name is {username}</h1>
//       <button onClick={changeNum}>click </button>
      
//     </div>
//   )
// }

// export default App



































// import React from 'react'

// const App = () => {
//   let a = 20;
//   function btn(){
//     console.log(a);
//     a++;
//     console.log(a);
    
//   }

//   return (
//     <div>
//       <h1>value of a is {a}</h1>
//       <button onClick={btn}>click me</button>
    
//     </div>
//   )
// }

// export default App
