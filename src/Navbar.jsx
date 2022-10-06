// import './Navbar.css'
// import React from 'react';
// import { Outlet, Link } from "react-router-dom";

// function Navbar(props) {

//     return ( < >

//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//   <div className="container">
//     <a className="navbar-brand" href="/" >Manish</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="collapsibleNavbar">
//       <ul className="navbar-nav" >
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>  
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Link</a></li>
//             <li><a className="dropdown-item" href="#">Another link</a></li>
//             <li><a className="dropdown-item" href="#">A third link</a></li>
//           </ul>
//         </li>
//       </ul>
//       <div className="shopcard" >
//      <a href="/cards">{props.count}</a>
//     </div>
//     </div>
 
//   </div>
// </nav>
// <Outlet />
//         </>
//     )
// }
// export default Navbar;




import React from 'react';
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
    return (
      <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>  
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Dropdown</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Link</Link></li>
            <li><Link className="dropdown-item" to="#">Another link</Link></li>
            <li><Link className="dropdown-item" to="#">A third link</Link></li>
          </ul>
        </li>
      </ul>
      <div className="card">
      <Link to="/cards"><i className="fa fa-shopping-cart" /> {props.count}</Link>

      </div>
    </div>
  </div>
</nav>
      <Outlet />
    </>
    )
}

export default Navbar;