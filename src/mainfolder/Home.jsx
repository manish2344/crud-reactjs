import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
const Home = () => {
    const [data2, setdata] = useState([]);
    useEffect(() => {
        loadusser();
    }, []);
    const loadusser = async() => {
        const result = await axios.get("http://localhost:3002/user");
        console.log(result.data);
        setdata(result.data)
    }
    return ( <> { /* <h1>hello</h1> */ } 
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
            data2.map((value, index) => ( 
              <tr>
                <td> { value.id } </td> 
                <td> { value.name } </td> 
                <td > { value.username } </td> 
                <td> { value.email } </td> { /* <td>{value.address.city}</td> */ } 
                <td>
                <Link className = "btn btn-primary " > view </Link>
                 <Link className = "btn btn-danger " onClick={()=>deleteuser(vs)}> delete </Link> 
                 <Link className = "btn btn-success" to={`/user/edit/${value.id}`} > edit </Link> 
                 </td> 
                 </tr>
            ))
        }

        </tbody> 
        </table> 
        </>
    )
};

export default Home;