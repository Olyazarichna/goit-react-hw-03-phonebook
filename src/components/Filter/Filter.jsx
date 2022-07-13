import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ onChange, value }) => {
  return (
    <label className={css.findCont}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
        className={css.findInput}
      />
    </label>
  );
};
export default Filter;

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
