import React from "react";
  const Card = (props) =>{
    console.log(props);
  
  
    return ( 
    <>
    
    <div className="main">
        <img src= {props.img} alt="" />
        <h1 className=" heading">{props.user} {props.age}</h1>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button className="butt">view profile </button>
        
    </div>
    
    
    </>
    )
  
}
export default Card;