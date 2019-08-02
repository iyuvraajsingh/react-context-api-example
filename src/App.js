import React from "react";
import "./App.css";

//Create a new context which will broadcast your data from your parent component to all the child and sub-child components.
const MyContext = React.createContext();

 
function App() {
  return (
    <div className="App">
      <h1>React Context API Example</h1>
    </div>
  );
}

export default App;
