import React, { useState } from 'react'

function Onclick() {
    const[number,setNumber]=useState(0)
  const increament=()=>{
    setNumber(number+1);
  }
  const decreament=()=>{
   if(number>1)
   setNumber(number-1)
  }
  const reset=()=>{
    setNumber(0)
  }
  return (
    <div>
        <img src="Imagesfolder/mango.jfif"/><br/>
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button><br/>
        <button onClick={reset}>reset</button>
        <div>{number}</div>
    </div>
  )
}

export default Onclick