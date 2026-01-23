import React from 'react'

const App = () => {
  function btnClick(){
    console.log("Button is clicked"); 
  }

  function mouseOver(){
    console.log("Mouse is over the button");
  }
  function InputChanging(){
    console.log("user is typing something about yourself");
  }

  function InputChanged(val){
    console.log("user has chnged thw inpit value ", val);
  }

  const pageScrolling =(elem)=>{
    // console.log("Page is scrolling" , elem )
    if(elem > 0){
      console.log("seedhe scrolling");
    }else{
      console.log("upar scrolling");
    }

  }
  return (

    <div>
      <input onChange={InputChanging} type="text" placeholder='Enter your name' />
      <input  onChange={function(elem){
        console.log(elem.target.value);
      }} type='text' placeholder='Enter the value'></input>

      {/* second concept */}

      <input  onChange={function(elem){
        InputChanged(elem.target.value)

      }} type='text' placeholder='enter the changed value'></input>

      <button onClick={btnClick}>click me</button>
      <button onDoubleClick={btnClick}> double click me</button>
      <button onMouseOver={mouseOver}>mouse aaya hai mere pas</button>

      <button  onClick={
        function(){
          console.log("button click ho gayi hai ")
        }
      }>without event </button>


      <div onMouseMove={(elem)=>{
        console.log(elem.clientX, elem.clientY)
      }} className='box'> aditya</div>




      <div onWheel={(elem)=>{
        // console.log(elem.deltaX, elem.deltaY, elem.deltaZ);
        // console.log(elem.deltaY );
        pageScrolling(elem.deltaY)
      }}>
        <div className='page1 '>page1</div>
        <div className='page2'>page2</div>
        <div className='page3'>page3</div>
        
      </div>




    </div>
  )
}

export default App
