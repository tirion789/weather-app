'use client';

import { useRef, useState } from 'react';

import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input/Input';
import IconSearch from '@assets/icons/search.svg';
import SunIcon from '@assets/icons/sun.svg';

import styles from './Header.module.scss';

export const Header = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <Button icon={<SunIcon />} onClick={() => {}} label="Change theme" />
      <Input
        placeholder={'Enter city name'}
        icon={<IconSearch />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
