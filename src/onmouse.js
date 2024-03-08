import React from 'react'

// function onmouse() {
//     const Onmouseup=()=>{
//         document.write("Hello manish")
//     }
    
//     const Onmousedown=()=>{
//         document.write("Hello Ganesh")
//     }
function onmouse() {
    const OnmouseEnter=()=>{
        console.log("Hello manish");
    }
    
    const OnmouseLeave=()=>{
        console.log("Hello Ganesh");
    }
    

  return (
    <section>
        
    <div onMouseEnter={OnmouseEnter} 
        onMouseLeave={OnmouseLeave}
     style={{width:'250px', height:'100px',background:'green'}}>hoverme</div>
      </section>
  )
}

export default onmouse