import React from 'react';
import { Link} from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">

<div className="container">
  { /* Links */ }
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">home</Link>
    </li>
  
  </ul>
  <div className="add">
    <Link to="/user/add" className='btn btn-warning'>add user</Link>
  </div>
</div>

</nav>
{/* <Outlet/> */}
    </div>
  );
}

export default Navbar2;

