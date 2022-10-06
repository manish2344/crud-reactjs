import React, { useState } from 'react';
import  axios from 'axios';
import { useHistory } from 'react-router-dom';
const Adduser = () => {
    const history = useHistory();
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
await axios.post("http://localhost:3002/user",users);
history.push("/")
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
        
     <button className='btn btn-danger'>add user</button>
 </form>
        </div>
    );
}

export default Adduser;
