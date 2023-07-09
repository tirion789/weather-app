'use client';
import classNames from 'classnames';
import { useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import { Button } from '@ui/Button';
import { useOutsideClick } from 'hooks/useOutsideClick';

import { SelectProps } from './Select.props';
import styles from './Select.module.scss';

export const Select = ({
  options,
  onClickItem,
  currentOption,
  className,
  isDisabled,
  placeholder,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleClickOpenSelect = () => {
    setIsOpen((prev) => !prev);
  };

  useOutsideClick(selectRef, () => setIsOpen(false));

  const selectClassName = classNames(styles.container, className);

  return (
    <div ref={selectRef} className={selectClassName}>
      <Button
        isDisabled={isDisabled}
        icon={
          isOpen ? (
            <ArrowIcon className={styles.animation_icon} transform="rotate(180)" />
          ) : (
            <ArrowIcon className={styles.animation_icon} />
          )
        }
        onClick={handleClickOpenSelect}
        label={currentOption || placeholder}
        className={styles.select}
      />
      {isOpen && (
        <ul className={styles.select_list}>
          {options.map(({ value, id }) => (
            <li key={id}>
              <button onClick={() => onClickItem(value)} className={styles.button}>
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
