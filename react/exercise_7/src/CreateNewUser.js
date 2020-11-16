import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CreateNewUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
    },
    userExist: false,
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState(currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value,
      },
    }));
  };
  
  userExists = currUserName => {
    const users = this.props.users;
    for (let user of users) {
      if (user.userName === currUserName) {
        return true;
      };
    };
    return false;
  };
  
  handleSubmit = event => {
    event.preventDefault();
    // if user doesn't exist yet, add
    const userExist = this.userExists(this.state.user.userName)
    
    if (!userExist) {
      this.props.onAddUser(this.state.user);
    };
    
    this.setState(() => ({
      userExist,
    }));
  };
  
  isDisabled = () => {
   const { firstName, lastName, userName } = this.state.user;
    return firstName === '' || lastName === '' | userName === '';
  }
  
  render() {
    const { firstName, lastName, userName } = this.state.user;

    return (
      <div>
        <h2>Create New User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
		    <div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={firstName}
                onChange={this.handleInputChange}
              />
			</div>
		    <div>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={lastName}
                onChange={this.handleInputChange}
              />
			</div>		  
		    <div>
              <input
                type="text"
                name="userName"
                placeholder="Enter username"
                value={userName}
                onChange={this.handleInputChange}
              />
			</div>
		  </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {this.state.userExist ? (<p className="error">ERROR: User already exists.</p>) : ('')}
      </div>
    );
  };
};

CreateNewUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default CreateNewUser;