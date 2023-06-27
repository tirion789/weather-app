import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ theme, onClick, label, icon, isDisabled = false }, ref) => {
    const buttonClassName = classNames(
      styles.button,
      theme && styles[theme],
      icon && styles.button_icon,
      isDisabled && styles.disabled
    );
    return (
      <button ref={ref} disabled={isDisabled} onClick={onClick} className={buttonClassName}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{label}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
