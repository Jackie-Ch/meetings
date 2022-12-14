import React from 'react';
import PropTypes from 'prop-types';

function GroupList({
  items,
  contentProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            'list-group-item' + (items[item] === selectedItem ? ' active' : '')
          }
          onClick={() => onItemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
}

GroupList.defaultProps = {
  contentProperty: 'name',
  valueProperty: '_id'
};
GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  contentProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  selectedItem: PropTypes.object
};

export default GroupList;
