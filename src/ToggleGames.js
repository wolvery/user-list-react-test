import React, { Component } from 'react';

export default class ToggleGames extends Component{
  state = {active:false}
  toggle = event => {
    this.setState(currentState => ({active: !currentState.active}));
  }
  render() {
    let {user} = this.props;
    return (
      <React.Fragment>
       <button onClick={this.toggle}>{(this.state.active? "Hide" : "Show")} the Number of Games Played</button>
		{this.state.active? (<p>{`${user.userName} played ${user.gamersPlayed} games`} </p>) : ""}
       </React.Fragment>
      )
  }
  
}
  
  