import React from 'react';
import PropTypes from 'prop-types';

function Qualitie({ qualities }) {
  return (
    <td>
      {qualities.map((quality) => (
        <span key={quality._id} className={`p1 badge bg-${quality.color}`}>
          {quality.name}
        </span>
      ))}
    </td>
  );
}

Qualitie.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default Qualitie;
