import React from "react";
import { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route,

//} from "react-router-dom";

function App(props) {
  const[mode ,setMode ]= useState('light')//wheter to enable dark mode or not
  const toggleMode=() =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor ="#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
    }
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar  mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3"
      style={{color: props.mode==='dark'?'white':'black'}}>
     
     {/*<Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} />}>
            </Route>
     </Routes> */}
     <TextForm heading="Enter text to analyze"  mode={mode} />
        </div>
  {/*</Router>*/}
        
        
    </>
  );
}

export default App;
