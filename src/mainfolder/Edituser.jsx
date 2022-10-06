import React, { useState,useEffect } from 'react';
import  axios from 'axios';
import { useHistory,useParams } from 'react-router-dom';
const Edituser = () => {
    const history = useHistory();
    const {id} =  useParams();
const [users, setUsers] = useState({
name:"",
email:"",
username:"",
phone:"",

    })
    const {name ,email, username,phone}= users;
    const inputchange = (e) =>{
        console.log(e.target.value)
        setUsers({...users,[e.target.name]:e.target.value})
    }
const onSubmit= async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:3002/user/${id}`,users);
history.push("/")
    }
    useEffect(() => {
        loaduser();
    }, []);
    const loaduser = async()=>{
        const result = await axios.get(`http://localhost:3002/user/${id}`)
        setUsers(result.data)
    }
    return (
        <div className='container' >
    <form onSubmit={e =>onSubmit(e)}>
    <div className="form-group">
    <input 
     type="text"
     className="form-control" 
     placeholder="enter email"
     name='email'
     value={email}
     onChange={e => inputchange(e)} />
     </div>
       <input type="text"
     className="form-control" 
     placeholder="enter name"
     name='name'
     value={name} 
     onChange={e => inputchange(e)}
     />
        <input type="text"
     className="form-control" 
     placeholder="enter username"
     name='username'
     value={username} 
     onChange={e => inputchange(e)}
     />
        <input type="text"
     className="form-control" 
     placeholder="enter "
     value={phone}
     name='phone' 
     onChange={e => inputchange(e)}
     />
        
     <button className='btn btn-danger'>edit user</button>
 </form>
        </div>
    );
}

export default Edituser;
