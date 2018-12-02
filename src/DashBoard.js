import React, { Component } from 'react';
import UsersForm from './UsersForm.js';
import UsersList from './UsersList.js';



export default class DashBoard extends Component{
  state = {
    users:[]
  }

	addUser = (user) => {
      this.setState((currentState) => ({users: [...currentState.users, user]}));
    }

	existsUser = (userName) => {
      const usersFiltered = this.state.users.filter(user => (user.userName === userName)); 
	  return usersFiltered.length > 0;
    }

	render(){
      
      return(
      <React.Fragment>
      	<UsersForm addUser={this.addUser} existsUser={this.existsUser} />
	  	<UsersList users={this.state.users}  />
      </React.Fragment>
    )}
};