import React from 'react';
import PropTypes from 'prop-types';

function SearchStatus({ users }) {
  const getNumberOfPeople = () => {
    return (
      <h5>
        <span>{`${users.length} человек тусанут с тобой сегодня`}</span>
      </h5>
    );
  };
  return <span className="badge bg-primary fs-5">{getNumberOfPeople()}</span>;
}

SearchStatus.propTypes = {
  users: PropTypes.array.isRequired
};

export default SearchStatus;
