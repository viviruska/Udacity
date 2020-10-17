import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieContainer extends Component {

		render() {
          	const { usersByMovies, users, movies } = this.props;
          	
        	const movieItems = Object.keys(movies).map(id => (
            	<MovieItem
              		key={id}
                    users={users}
                    usersWhoLikesIt={usersByMovies[id]}
					movie={movies[id]}
              	/>
            ));
            return <ul>{movieItems}</ul>;
        }
	}

export default MovieContainer;