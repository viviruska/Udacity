import React, { Component } from 'react';


class UserList extends Component {
	render() {
      	const { users, usersWhoLikesIt } = this.props;
      
      	if (!usersWhoLikesIt || usersWhoLikesIt.length === 0) {
          return <p>None of the current users liked this movie</p>
        } else {
        	const Users = usersWhoLikesIt.map(userID => (
            	<li key={userID}>{users[userID].name}</li>
            ));
          	return <ul>{Users}</ul>;
        }
    }
}

export default UserList;