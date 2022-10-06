import React, { useState } from 'react';

const Increase = () => {
    const [value, setvalue] = useState(1);
  const fun =()=>{
setvalue(value+1)
  }
  const fun2 =()=>{
    if(value>0){
        setvalue(value-1)
    }else{
        setvalue(0)
    }
   
      }
const fun3=()=>{
    setvalue(0)
}
    return ( <div>
    <button onClick={()=>fun()}>increase</button>
    <button onClick={()=>fun2()}>Decrease</button>
    <button onClick={()=>fun3()}>reset</button>
            <h3>{value}</h3>
        </div>
    );
}

export default Increase;