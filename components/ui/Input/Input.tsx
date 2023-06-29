import { forwardRef } from 'react';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, onChange, placeholder, icon, type = 'text', isDisabled = false, inputMod = 'text' },
    ref
  ) => {
    return (
      <div className={styles.container}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          ref={ref}
          type={type}
          inputMode={inputMod}
          className={`${styles.input} ${isDisabled && styles.disabled}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
