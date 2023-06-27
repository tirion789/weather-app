import { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  theme: 'outlined';
  label: string;
  icon?: ReactNode;
  isDisabled?: boolean;
}
