'use client';
import classNames from 'classnames';
import { useRef, useState } from 'react';

import { useKeyDownOutside } from 'hooks/useKeyDownOutside';
import ArrowIcon from '@assets/icons/arrow.svg';
import { Button } from '@ui/Button';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { BUTTONS_ON_KEYBOARD } from 'constans';

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

  useOutsideClick(selectRef, () => setIsOpen(false), isOpen);
  useKeyDownOutside(selectRef, () => setIsOpen(false), isOpen, BUTTONS_ON_KEYBOARD.Enter);

  const handleClickOpenSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const selectClassName = classNames(styles.container, className);

  return (
    <div ref={selectRef} className={selectClassName}>
      <Button
        isDisabled={isDisabled}
        icon={<ArrowIcon className={styles.animation_icon} />}
        onClick={handleClickOpenSelect}
        label={currentOption || placeholder}
        className={classNames(styles.select, isOpen && styles.select_open)}
      />
      {isOpen && (
        <ul className={styles.select_list}>
          {options.map(({ value, id }) => (
            <li key={id}>
              <button
                onClick={() => onClickItem(value)}
                className={classNames(
                  styles.button,
                  currentOption === value && styles.active_button
                )}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
