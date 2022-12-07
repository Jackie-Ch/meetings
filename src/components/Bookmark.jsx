import React from 'react';
import PropTypes from 'prop-types';

function Bookmark({ status, ...rest }) {
  return (
    <td>
      <i
        {...rest}
        className={'bi fs-3 bi-bookmark-heart' + (status ? '-fill fs-3' : '')}
      ></i>
    </td>
  );
}

Bookmark.propTypes = {
  status: PropTypes.bool.isRequired
};

export default Bookmark;
