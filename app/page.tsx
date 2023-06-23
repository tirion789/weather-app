'use client';
import React from 'react';

import { Button } from '@ui/Button/Button';

export default function Home() {
  return (
    <Button onClick={() => console.log(123)} theme="unfilled">
      click me!
    </Button>
  );
}
