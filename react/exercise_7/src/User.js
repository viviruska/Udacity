import React from 'react';
import PropTypes from 'prop-types';


const User = props => {
  return (
    <div>
      <li className="user">
        <p>{ props.user.userName } played { props.showGames ? props.user.numberOfGames : '*' } games</p>
      </li>
    </div>
  );
};

User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;