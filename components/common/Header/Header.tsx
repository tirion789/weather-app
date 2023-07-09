'use client';

import { useState } from 'react';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { Select } from '@ui/Select';
import IconSearch from '@assets/icons/search.svg';
import SunIcon from '@assets/icons/sun.svg';

import styles from './Header.module.scss';

export const Header = () => {
  const [value, setValue] = useState('');
  const [item, setItem] = useState('');
  const array = [
    { id: 0, value: 'Saratov' },
    { id: 1, value: 'Krasnodar' },
    { id: 2, value: 'Moscow' },
    { id: 3, value: 'Samara' },
    { id: 4, value: 'Ufa' },
  ];

  return (
    <header className={styles.container}>
      <Button icon={<SunIcon />} onClick={() => {}} label="Change theme" />
      <Select
        placeholder="Select city"
        currentOption={item}
        onClickItem={setItem}
        options={array}
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
