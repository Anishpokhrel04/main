import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solidwhite",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable White Mode");
    }
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3 ">About us</h1>
        <h2>Simple Tip for Great Writing</h2>
        <p>
          Writing the English language is just as much an art as it is a
          science. No doubt, your schoolteachers gave you rules to stick to in
          class. But out in the real world, there’s more leeway than you may
          have realized. Not to worry. You don’t need a master’s degree in
          publishing to be a good writer. If you follow these four tips anytime
          you write and edit, you’ll be able to turn out a quality email,
          report, or article. <br />
          <h2>1. Be consistent</h2> Some aspects of good writing are rules.
          Others are style choices. So how can you tell which is which? The
          easiest way is to pick and follow a style guide. There are many style
          guides for English: AP, APA, CMOS (a.k.a., Chicago), MLA, Oxford … It
          depends what country you’re writing for and what you’re writing about.
          If you’re writing within a school or company, you may be asked to
          follow what’s called a house style guide, that is, a guide created
          specifically for that entity. Some newspapers like The Economist or
          The Guardian even stick to their own.
        </p>

        <button onClick={toggleStyle} className="btn btn-primary my-3">
          {btntext}
        </button>
      </div>
    </>
  );
}
