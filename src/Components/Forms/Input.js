import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, placeholder, value, onChange, error, onBlur }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
          <span>{label}</span>
        </label>
        <input
          id={name}
          name={name}
          type="text"
          className={styles.input}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Input;
