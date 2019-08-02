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

// Create a class to display the current value of the variables in the provider. This will act as a child component and you can see that the value of the components from the parent is still being accessed in the child.
class DisplayName extends Component {
  render() {
    return (
      // Add a consumer wherever you need to access the data from the provider anywhere in the application.
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <h3>Current state for the following variables:</h3>
            <p>First Name: {context.state.firstName}</p>
            <p>Last Name: {context.state.lastName}</p>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

// Create a class to take input from the user and update that to your provider and see how DisplayName Component having the current value of the variables in the provider gets updated.
class UpdateName extends Component {
  render() {
    return (
      // Add a consumer wherever you need to access the data from the provider anywhere in the application.
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <form
              onSubmit={event => {
                event.preventDefault();
                // Get the new value from the user input.
                const data = {
                  firstName: event.target.firstName.value,
                  lastName: event.target.lastName.value
                };
                // Call the function which we wrote in the provider and pass in the data coming from the user input. This function will update the state of the variables with the new value coming in.
                context.updateDetails(data);
              }}
            >
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  style={{ borderWidth: "1px" }}
                />
              </label>
              <br />
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  style={{ borderWidth: "1px" }}
                />
              </label>
              <br />
              <br />
              <input
                type="submit"
                value="Update Names"
                style={{ borderWidth: "2px" }}
              />
            </form>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

function App() {
  return (
    // Wrap your whole application inside the provider so that you can have access to each and every thing inside provder on the whole applicaiton.
    <MyProvider>
      <div>
        <h1>React Context API Example</h1>
        <UpdateName />
        <DisplayName />
      </div>
    </MyProvider>
  );
}

export default App;
