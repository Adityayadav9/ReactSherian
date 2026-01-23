import React, { useState } from 'react';
// import React from 'react'

const App = () => {
  const [num, setnum] = useState(10)

  const buttonclicked=()=>{
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))




    // setnum(num+1);
    // setnum(num+1);
    // setnum(num+1);
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={buttonclicked}>click me</button>
      
    </div>
  )
}

export default App












// import React, { useState } from 'react'


// const App = () => {
//   const [num , setnum]=  useState({user: "anurag", age: 25});
//   const buttonclick =()=>{
//     setnum(prev=>({...prev, age: 28, user:"aryan"}))
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={buttonclick}>click me</button>
      
//     </div>
//   )
// }

// export default App






















// import React, { useState} from 'react';
// // import React from 'react'

// const App = () => {

// const [num, setnum] = useState([10, 20, 30]);
// const btn=()=>{
//   const  newNum  = [...num];
//   newNum.push(99);
//   setnum(newNum);

// }


//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btn}>click me</button>
      
//     </div>
//   )
// }

// export default App


















// import React, { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState({user: "aditya" ,age: 24})
//   const btn =()=>{
//     // setCount(count.user)
//     // console.log(count.user , count.age);
//     // setCount({user: "yadav", age: 25})


//     const newNum = {...count};

//     newNum.user = "Yadav ji";
//     newNum.age = 23
//     setCount(newNum)
//   }


//   return (
//     <div>
//       <h1>{count.user}, {count.age}</h1>
//       <button onClick={btn} >countkaro</button>
      
//     </div>
//   )
// }

// export default App
