import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({ theme, onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles[theme]}>
      {children}
    </button>
  );
};
