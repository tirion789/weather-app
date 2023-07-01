import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
  onClick,
  label,
  icon,
  isDisabled = false,
  className,
  theme,
}: ButtonProps) => {
  const buttonClassName = classNames(
    styles.button,
    className,
    icon && styles.button_icon,
    isDisabled && styles.disabled,
    theme && styles[theme]
  );
  return (
    <button disabled={isDisabled} onClick={onClick} className={buttonClassName}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
