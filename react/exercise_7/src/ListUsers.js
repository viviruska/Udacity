import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User.js';


class ListUsers extends Component {
  state = {
    showGamesPlayed: true,
  };
  
  toggleButton = () => {
    this.setState((oldState) => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  }
  
  render() {
    const { users } = this.props;
    const { showGamesPlayed } = this.state;
    
    const gamesButton = (
      <div>
        <button className="smallButton" onClick={this.toggleButton}>
          {showGamesPlayed ? 'Hide' : 'Show'} the Number of Games Played
        </button>
      </div>
    );
    
    return (
      <div>
        <h3>Users</h3>
		{users && users.length > 0 ? (gamesButton) : ('')}
        <ol>
      	  {users.map((user, index) => (<User key={user.userName} user={user} showGames={showGamesPlayed}/>))}
        </ol>
      </div>
    );
  };
};

ListUsers.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ListUsers;