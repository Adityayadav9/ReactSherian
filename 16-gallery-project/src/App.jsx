import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
const [userdata, setUserdata] = useState([]);
const[index, setIndex] = useState(1);
const getdata=async()=>{
    // console.log("data aa gaya hai")

    const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
// console.log(response.data)
setUserdata(response.data)
// console.log(userdata)
// console.log(response.data)

  }
  useEffect(function(){
    getdata()
  },[index])
  let printUserData = <h3 className="text-gray-400 bg-black ">no user available</h3> ;
  if(userdata.length>0){
    printUserData= userdata.map(function(elem , idx){
      return <div key={idx} target='_blank'>
        <a href={elem.url}>
         <div className='h-40 w-40 bg-white overflow-hidden rounded-xl'  key={idx}>
        <img className='h-full  w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg '>{elem.author}</h2>
        </a>
       
      </div>
    })
  }


  return (
    <div onClick={getdata} className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button className='bg-green-500 px-5 py-2 mb-5 rounded active:scale-95 cursor-pointer'>get data</button> */}
      <h1 className='fixed text-4xl ' >{index}</h1>
    <div className='flex flex-wrap gap-4 bg-black p-2'>{printUserData}</div>

    <div className=' flex justify-center items-center  gap-6 '>
      <button className='bg-amber-400 cursor-pointer text-sm  rounded active:scale-95 text-black px-4 py-2 '
      onClick={()=>{
        // console.log("prev button clicked");
        if(index>1){
        setIndex(index-1)
        }
      }}
      
      >prev</button>
      <button className='bg-amber-400 cursor-pointer text-sm rounded active:scale-95  text-black px-4 py-2 '
      onClick={()=>{
        // console.log("next  button clicked")
        setIndex(index+1)
      }}
      
      >next</button>
    </div>


      
     </div>
  )
}

export default App
