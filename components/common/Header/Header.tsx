'use client';

import { useState } from 'react';

import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input/Input';
import { Select } from '@ui/Select/Select';
import IconSearch from '@assets/icons/search.svg';
import SunIcon from '@assets/icons/sun.svg';
import ArrowIcon from '@assets/icons/arrow.svg';

import styles from './Header.module.scss';

export const Header = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState('Выберите город');
  const [buttonIcon, setButtonIcon] = useState(<ArrowIcon />);
  const array = ['Краснодар', 'Саратов', 'Воронеж', 'Самара', 'Воркута'];
  const handleClickOpenSelect = () => {
    setIsOpen((prev) => !prev);
    switch (isOpen) {
      case true:
        setButtonIcon(<ArrowIcon />);
        break;
      case false:
        setButtonIcon(<ArrowIcon transform="rotate(180)" />);
        break;
    }
  };
  const handleClickItemSelect = (item: string) => {
    setItem(item);
  };

  return (
    <header className={styles.container}>
      <Button icon={<SunIcon />} onClick={() => {}} label="Change theme" />
      <Select
        label={item}
        icon={buttonIcon}
        onClickItem={handleClickItemSelect}
        onClickButtonOpen={handleClickOpenSelect}
        isOpen={isOpen}
        list={array}
      />
      <Input
        placeholder={'Enter city name'}
        icon={<IconSearch />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </header>
  );
};
