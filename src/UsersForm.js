import React, { Component } from 'react';


export default class UsersForm extends Component{
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    gamersPlayed: 0
  }

  handleChange = (key,value) => {
    this.setState({ [key]: value });
  };


handleUserNameChange = event => { this.handleChange("userName", event.target.value);};
handleLastNameChange = event => { this.handleChange("lastName", event.target.value);};
handleFirstNameChange = event => { this.handleChange("firstName", event.target.value);};

isValid = () => ( this.props.existsUser(this.state.userName));

performSubmit = event => {
  event.preventDefault();
  this.props.addUser(this.state);
  this.setState(()=>({
    userName: "",
    firstName: "",
    lastName: ""
  }));
}

 render(){
   
   return(<form onSubmit={this.performSubmit}>
     <input
            type="text"
            placeholder="Enter New UserName"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
      <input
            type="text"
            placeholder="Enter User First Name"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
       <input
            type="text"
            placeholder="Enter User Last Name"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
      <button disabled={this.isValid()}>Add</button>
   </form>)

 }
}