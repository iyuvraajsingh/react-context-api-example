import React, { Component } from "react";
import "./App.css";

//Create a new context which will broadcast your data from your parent component to all the child and sub-child components.
const MyContext = React.createContext();

// Create a provider component
class MyProvider extends Component {
  state = {
    firstName: "John",
    lastName: "Smith"
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          //We are passing the state from the provider to all the child and sub-child components.
          state: this.state,
          //This function will update the state of the variables in the provider (in the whole app) whenever it is being called.
          updateDetails: data => {
            this.setState({
              firstName: data.firstName,
              lastName: data.lastName
            });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>React Context API Example</h1>
    </div>
  );
}

export default App;
