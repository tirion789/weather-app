import { ChangeEvent, ReactNode } from 'react';
export interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text';
  inputMod?: 'text' | 'search';
  placeholder?: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  className?: string;
}
