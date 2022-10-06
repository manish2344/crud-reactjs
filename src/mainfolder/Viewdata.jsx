import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function Viewdata() { 
    const {id}= useParams();
    const [users, setusers] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });

useEffect(() => {
   loaduser();
}, []);
    const loaduser = async()=>{
        const resource = await axios.get(`http://localhost:3002/user/${id}`)
         console.log(resource.data);
        setusers(resource.data);
    }
  return (
    <div>
<ul>
    <li>Email: {users.email}</li>
    <li>Name: {users.name}</li>
    <li>username: {users.username}</li>
    <li>phone: {users.phone}</li>
</ul>
    </div>
  )
}
