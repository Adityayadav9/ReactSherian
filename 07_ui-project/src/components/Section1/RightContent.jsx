import React from 'react'
import RightCard from './RightCard' 

const RightContent = () => {
    const arr=[
        {
            backgroundImage:"https://plus.unsplash.com/premium_photo-1732127042472-b2769c3aebba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            head2:"1",
            para:"Customer satisfaction is the key to building a loyal customer base.",
            butt1:"satisfied",
            color:"lightseaGreen",
            butt2:"<i className=\"ri-arrow-right-line\"></i>"


        },
         {
            backgroundImage:"https://plus.unsplash.com/premium_photo-1739299597487-9f64320270de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
            head2:"2",
            para:" Access to banking products significantly influences customer satisfaction levels.",
            butt1:"undeserved",
            butt2:"<i className=\"ri-arrow-right-line\"></i>",
            color:"orange"

         }, 
         
         {

            backgroundImage:"https://plus.unsplash.com/premium_photo-1763120206775-2d6ece46fe49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
            head2:"3",
            para:" Segmenting customers based on satisfaction and product access helps tailor services effectively.",
            butt1:"underbanked",
            butt2:"<i className=\"ri-arrow-right-line\"></i>",
            color:"purple"



         }]
  return (
    <div className=' px-5 ml-13 h-full w-2/3   flex flex-row justify-evenly items-center gap-5 '>
        {arr.map(function(elem , idx){
            return <div key={idx}>
<RightCard   backgroundImage={elem.backgroundImage} head2={elem.head2} para={elem.para} butt1={elem.butt1} butt2={elem.butt2}  color={elem.color}/>

            </div>

        })}

      

    </div>
  )
}

export default RightContent
