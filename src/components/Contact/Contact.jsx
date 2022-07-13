import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.listItem}>
      {name}: {number}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.bthList}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
