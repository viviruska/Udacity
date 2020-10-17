import React, { Component } from 'react';
import UserList from './UserList'


class MovieItem extends Component {
	render() {
      	const { users, usersWhoLikesIt, movie } = this.props;
      	
    	return (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>Liked By:</p>
			<UserList users={users} usersWhoLikesIt={usersWhoLikesIt}/>
          </li>
        );
    }
}

export default MovieItem;