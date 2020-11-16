import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewUser from './CreateNewUser.js';
import ListUsers from './ListUsers.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
  }
  handleAddUser = (user) => {
    user.numberOfGames = 0;
    this.setState(oldState => ({
      users: [...oldState.users, user],
    }));
    // console.log(this.state.users)
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<h1>Video Game website</h1>
		<CreateNewUser onAddUser={this.handleAddUser} users={this.state.users}/>
        <ListUsers users={this.state.users}/>
      </div>
    );
  }
}

export default App;
