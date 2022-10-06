import React from 'react'
import { useState } from 'react';
import './foter.css'
export default function Footer() {
    const [text, settext] = useState("");
    // let  numbers = [1, 2, 3, 4, 5];
    const handle = (event) => {
        settext(event.target.value)
    }
    const Fun = () => {
        settext(text.toUpperCase())
    }
    const Fun2 = () => {
        settext(text.toLowerCase())
    }
    const Fun3 = () => {
        let a = ""
        settext(a)
    }
  const [myElement , setmyElement] = useState({  backgroundColor:"black",
  color:"white"});
  const [mybtn, setmybtn] = useState("dark node");
  const Fun4 = () => {
    if(myElement.color === 'white'){
      setmyElement( {color:"black",  backgroundColor:"white"})
      setmybtn("white mode")   
   }else{
      setmyElement( { backgroundColor:"black",
      color:"white"})
      setmybtn("dark mode")
      }
}

    return (

        <div className = "container">

        <textarea className = 'col-12 '
        value = { text }
        name = ""
        id = ""
        cols = "30"
        rows = "10"
        onChange = { handle } style={myElement}> </textarea><br/>
        <div className = "btnss">
        <button className = 'btn bg-success'
        onClick = { Fun } > Uppercase </button> 
        <button className = 'btn bg-warning' onClick = {Fun2} > Lowercase </button> 
        <button className = 'btn bg-danger'
        onClick = { Fun3 } > Clear </button>
        <button className = 'btn bg-primary'
        onClick = { Fun4 } >{mybtn}</button>
        
        </div> 
        <h1> about text..... </h1> 
        <div className = "col-2 char" >
        <p> Charecters <b> { text.length } </b></p>
        <p> length <b> { text.split(" ").length } </b></p>
        </div> 
        <p> { text } </p> 
        </div>



    )
}