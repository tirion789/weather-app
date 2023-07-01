import { ReactNode } from 'react';

export interface SelectProps {
  list: string[];
  onClickButtonOpen: () => void;
  onClickItem: (item: string) => void;
  isOpen: boolean;
  icon?: ReactNode;
  label: string;
  className?: string;
  isDisabled?: boolean;
}
