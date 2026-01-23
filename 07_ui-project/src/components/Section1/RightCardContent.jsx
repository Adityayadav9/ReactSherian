import React from 'react'
import RightCard from './RightCard'
// import backgroundImage from '../../assets/image3.jpg'
import RightContent from './RightContent'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8  flex flex-col justify-between'>
       
           <h2 className='bg-white rounded-full  text-2xl font-bold h-12 w-12  flex justify-center items-center   '> {props.head2}</h2>
           <div>

                <p className=' text-white  mb-10 text-xl ' > {props.para}</p>
          
               <button className='bg-blue-500 text-white rounded-full text-2xl p-2 '> {props.butt1}</button>
                 <button className='bg-blue-500 text-white rounded-full text-2xl p-2'>{props.butt2}</button>
           </div>
     

       </div>
  )
}

export default RightCardContent
