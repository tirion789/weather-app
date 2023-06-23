import { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  theme: 'filled' | 'unfilled';
  children: ReactNode;
}
