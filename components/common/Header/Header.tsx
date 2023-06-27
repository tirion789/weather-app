'use client';

import { useRef, useState } from 'react';

import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input/Input';
import IconSearch from '@assets/icons/search.svg';
import SunIcon from '@assets/icons/sun.svg';

import styles from './Header.module.scss';

export const Header = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  console.log(inputRef.current);
  console.log(buttonRef.current);

  return (
    <div className={styles.container}>
      <Button
        ref={buttonRef}
        icon={<SunIcon />}
        onClick={() => console.log('asdf')}
        label="Change theme"
        theme="outlined"
      />
      <Input
        ref={inputRef}
        placeholder={'Enter city name'}
        icon={<IconSearch />}
        value={value}
        onChange={(event) => setValue(event?.target.value)}
      />
    </div>
  );
};
