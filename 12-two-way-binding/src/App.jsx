
import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")


  const FormHandle=(e)=>{
    e.preventDefault()
    console.log("from submitted by" , title)
    settitle(' ')
  }

  
  return (
    <div>
      <form onSubmit={(e)=>{FormHandle(e)}}>
        <input type="text"  placeholder='enter your name'
        
        
        // onChange={(e)=>{
        //   console.log(e.target.value)
        // }}
        // value={'aditya'}
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}




        
        />
        <button > submit</button>
      </form>
      
    </div>
  )
}

export default App




















// import React, { useState } from 'react'

// const App = () => {
//   const [title, settitle] = useState("yadav ");



//   const submitHandler=(e)=>{
//     e.preventDefault()
//     console.log("form successfully submitted");
//   }
//   return (
//     <div>
//       <form  onSubmit={(e)=>{
//         submitHandler(e)}}>
//         <input type="text" placeholder='enter your name'
//         // onChange={(e)=>{
//         //   // console.log(e.target.value)
//         // }}
//         // value={"Aditya"}

//         value={title}
//         onChange={(e)=>{
//           settitle('e.target.value')
//         }}

//         />
//         <button>submit</button>
//       </form>
      
//     </div>
//   )
// }

// export default App
