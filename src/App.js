import React, { useState } from 'react';
// import Card from './card';
// import Change from './Change';
import Navbar from './Navbar';
import Shopping from './shopping';
// import Layout from "./pages/Layout";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Card from './card';
import Change from './Change';

const App = () => {
  const [Cards, setcards] = useState([]);
  console.log({Cards});
const  addtoCard=(data)=>{
 // console.log(data);
setcards([...Cards,{...data,quantity:1}]);
}

    return ( 
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar count={Cards.length}/>}>
          <Route index element={<Card addtoCard = {addtoCard} />} />
          <Route path="cards" element={<Shopping cart={Cards} />}/>
       
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Change/> */}
    {/* <Navbar/> */}
    </>

    );
}

export default App;
//             <Route index path='/' element={ <Card addtoCard = {addtoCard}/>} />
//             <Route path="/cards" element={<Shopping cart={Cards}/>} />

