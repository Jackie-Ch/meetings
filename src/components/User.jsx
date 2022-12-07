import React from 'react';
import Bookmark from './Bookmark';
import Qualitie from './Qualitie';
import PropTypes from 'prop-types';

function User({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookmark,
  bookmark
}) {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <Qualitie qualities={qualities} />
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <Bookmark
        id={_id}
        onClick={() => onToggleBookmark(_id)}
        status={bookmark}
      />
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.bool
};

export default User;
