import React, { useState } from 'react';
import './Color.css'
const Colormode = () => {
    const [newcolor, setColor] = useState(
        {color:"white",  backgroundColor:"red",height:"100px"});
   const [btn, setbtn] = useState("get data");
const handle = () =>{
  
   if(newcolor.color === 'white'){
   setColor( {color:"black",  backgroundColor:"green",height:"100px"})
   setbtn("got data")   
}else{
    setColor( {color:"white",  backgroundColor:"red",height:"100px"})
    setbtn("get data")
   }

}
    return (
        <div>
        
         <div className="container">
<div className="darkmod" style={newcolor}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nam repellat magnam consequuntur modi hic, necessitatibus ad sint perspiciatis eaque iste tenetur repellendus aperiam fuga odit, unde placeat nobis. Alias.
</div>
 <button onClick={handle}>{btn}</button>
         </div>
        </div>
    );
}

export default Colormode;
