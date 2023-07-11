type OptionsType = {
  id: number;
  value: string;
};

export interface SelectProps {
  options: OptionsType[];
  onClickItem: (item: string) => void;
  placeholder: string;
  currentOption: string;
  className?: string;
  isDisabled?: boolean;
}
