import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
  onClick,
  label,
  icon,
  isDisabled = false,
  className = '',
}: ButtonProps) => {
  const buttonClassName = classNames(
    styles.button,
    icon && styles.button_icon,
    isDisabled && styles.disabled
  );
  return (
    <button disabled={isDisabled} onClick={onClick} className={`${buttonClassName} ${className}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
