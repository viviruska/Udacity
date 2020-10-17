import React, { Component } from 'react';

class ListUserFavMovies extends Component {
    render() {
        return (
            <ol>
                { this.props.profiles.map(profile => {
          			const userName = this.props.users[profile.userID].name;
          			const favMovie = this.props.movies[profile.favoriteMovieID].name;
      				return (
                    <li key={ profile.id }>
                        <div>
                            <p>{userName}s favorite movie is {favMovie}</p>
                        </div>
                    </li>);
    })}
            </ol>
        )
    }
}

export default ListUserFavMovies