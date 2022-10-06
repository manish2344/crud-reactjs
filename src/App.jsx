import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar2 from './mainfolder/Navbar2';
import Adduser from './mainfolder/Adduser';
import Edituser from './mainfolder/Edituser';
import Home2 from './mainfolder/Home2';
import Viewdata from './mainfolder/Viewdata';
const App2 = () => {
    return ( <div>
        <Router>
        <Navbar2/>
        <Switch>
        <Route exact path ="/" component={Home2}/>
        <Route exact path = "/user/add" component = { Adduser }/>   
        <Route exact path = "/user/edit/:id" component = { Edituser }/>  
        <Route exact path = "/user/:id"component = { Viewdata }/>  
         </Switch> 
         </Router>

        </div>
    );
}

export default App2;
