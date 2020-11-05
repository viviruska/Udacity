import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => {
  const deleteLastItem = (event) => {
    props.onDeleteLastItem();
  };
  return (
    <div>
      <button onClick={deleteLastItem} disabled={props.buttonDisabled}>
        Delete Last Item
      </button>
    </div>
  );
};

DeleteLastItem.propTypes = {
  onDeleteLastItem: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.func.isRequired,
};

export default DeleteLastItem;