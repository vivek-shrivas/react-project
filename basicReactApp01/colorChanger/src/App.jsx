import { useState } from "react";
import "./App.css";
import { set } from "firebase/database";





function App() {

  const [color,setColor]= useState("white")

  const red = () => {
    setColor("red")
   }

   const green =  ()=> {
    setColor("green");
   }

   const blue = (color) => {
    setColor("blue")
   }
  return (
    <>
      <div className="outer-container">
        <h6 className="title">Color Changer</h6>
        <div className="screen" style={{ backgroundColor: color }}>
          
        </div>
        <div className="btnCnt" >
          <button className="btn-1" onClick={red}>Red</button>
          <button className="btn-2" onClick={blue}>Blue</button>
          <button className="btn-3" onClick={green}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
