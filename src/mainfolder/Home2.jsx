import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import './home.css';
const Home2 = () => {
    const [data2, setdata] = useState([]);
    useEffect(() => {
        loadusser();
    }, []);
    const loadusser = async() => {
        const result = await axios.get("http://localhost:3002/user");
        console.log(result.data);
        setdata(result.data)
    }
const deleteuser= async(id)=>{
    await axios.delete(`http://localhost:3002/user/${id}`);
    loadusser();
}
    
    return ( <div className='container '> { /* <h1>hello</h1> */ } 
         <table className = "table table-dark">
        <thead>
        <tr>
        <td> id </td> 
        <th> Name </th> 
        <th> Username </th> 
        <th> Email </th>  
        <th> action </th> 
        </tr> 
        </thead> 
        <tbody> 
        {
            data2.map((user, index) => ( 
              <tr>
                <td>{user.id}</td> 
                <td>{user.name}</td> 
                <td>{user.username}</td> 
                <td>{ user.email }</td> 
                <td>
                  <Link className='btn btn-primary m-1' to={`/user/${user.id}`}>view</Link>
                  <Link className='btn btn-danger m-1' onClick={()=>deleteuser(user.id)}>delete</Link>
                  <Link className='btn btn-warning'to={`/user/edit/${user.id}`}>edit</Link>
                </td>
                 </tr>
            ))
        }

        </tbody> 
        </table> 
        </div>
    )
};

export default Home2;
