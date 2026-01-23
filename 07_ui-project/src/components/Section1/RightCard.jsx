import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-170 w-75  overflow-hidden  overflow-x-auto flex-nowrap mb-12 relative rounded-4xl'>
        <img className='h-full w-full object-cover ' src={props.backgroundImage} alt="" />

       {/* <button className='border-y-gray-800'> Satisfied</button> */}
       {/* <RightCardContent /> */}
       <div className='absolute top-0 left-0 h-full w-full p-8  flex flex-col justify-between'>
       
           <h2 className='bg-white rounded-full  text-2xl font-bold h-12 w-12  flex justify-center items-center   '> {props.head2}</h2>
           <div>

                <p className=' text-white  mb-10 text-xl ' > {props.para}</p>
          
               <button style={{backgroundColor: props.color}} className=' text-white rounded-full text-2xl p-2 '> {props.butt1}</button>
                 <button className='bg-blue-500 text-white rounded-full text-2xl p-2'><i className="ri-arrow-right-line"></i></button>
           </div>
     

       </div>

      
    </div>
  )
}

export default RightCard
