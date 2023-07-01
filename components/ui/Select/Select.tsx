'use client';

import classNames from 'classnames';

import { Button } from '@ui/Button/Button';

import styles from './Select.module.scss';
import { SelectProps } from './Select.props';

export const Select = ({
  list,
  onClickButtonOpen,
  isOpen,
  onClickItem,
  icon,
  label,
  className,
  isDisabled = false,
}: SelectProps) => {
  const filteredArray = label ? list.filter((string) => string !== label) : list;

  const selectClassName = classNames(styles.container, className);
  return (
    <div className={selectClassName}>
      <span className={styles.button}>
        <Button
          isDisabled={isDisabled}
          theme="select"
          icon={icon}
          onClick={onClickButtonOpen}
          label={label}
        />
      </span>
      {isOpen && (
        <ul className={styles.select_list}>
          {filteredArray.map((item) => (
            <li onClick={() => onClickItem(item)} className={styles.select_list_item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
