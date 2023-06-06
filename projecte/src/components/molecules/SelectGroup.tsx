import { FC } from 'react';
import { Label, Select, TSelect, TLabel } from '../atoms';

type TSelectGroup = TSelect &
  Pick<TLabel, 'hiddenLabel'> & {
    label: string;
  };

const SelectGroup: FC<TSelectGroup> = ({
  label,
  id,
  name,
  options,
  hiddenLabel,
  ...rest
}) => (
  <div>
    <Label htmlFor={id} hiddenLabel={hiddenLabel}>
      {label}
    </Label>{' '}
    <Select name={name} id={id} options={options} {...rest} />
  </div>
);

export default SelectGroup;
