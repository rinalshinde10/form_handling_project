import { useState } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState("");



  return ( <div>
    <h1>Form Handling</h1>
    <input type="text" placeholder="Enter Your Name:"  onChange={(e) => { setName(e.target.value);} }  
    value={name}/>
    <br/> <br/>
    <button type="button">Save</button>
    <br/><br/>
    <button type="button" onClick={() => { setName("");}}>Reset</button>
    <h1>{name}</h1>
  </div>);

}
export default App;