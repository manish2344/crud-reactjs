import React from 'react';
import Blogs from './Blogs';
import Contact from './Contact';

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Navbar2 from './Navbar2';
import Adduser from './Adduser';
 import Edituser from './Edituser';
import Home2 from './Home2';
import Viewdata from './Viewdata';
import Increase from './Increase';
const App2 = () => {
    return ( 
    <div>
      <Router>
      <Navbar2/>
       <Switch>
          <Route exact path="/" component={Home2}></Route>
          <Route exact path="/blogs" component={Blogs}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/user/add" component={Adduser}/>  
          <Route exact path="/user/edit/:id" component={Edituser}/> 
          <Route exact path="/user/:id" component={Viewdata}/>  
          </Switch>
      </Router>
  {/* <Increase/> */}
    </div>
    );
}

export default App2;


// import React from 'react';

// const App2 = () => {
//   return (
//     <div>
//       h1 hello
//     </div>
//   );
// }

// export default App2;
