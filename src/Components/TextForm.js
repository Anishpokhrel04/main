import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDnClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleClClick = () => {
    let newText = ("");
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  
  const [text, setText] = useState("");
  //Text="new text"; wrong way to change the text
  //setText = ("new twxt");

  return (
    <>
    <div className="container" style={{color :props.mode==="dark"?"white":"#042743"}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control border border-end-0" id="myBox"
         style={{backgroundColor :props.mode==="white"?"dark":"grey" ,color :props.mode==="dark"?"white":"#042743"}} 
         value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2  " onClick={handleUpClick}>To Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleDnClick}>To Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
      <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>



    </div>
    <div className="container me-auto mb-5 " style={{color :props.mode==="dark"?"white":"#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <h2>Preview</h2>
      <p>{text.length>0? text: "Enter in the above box to preview something"}</p>

    </div>
    </>
  );
}
