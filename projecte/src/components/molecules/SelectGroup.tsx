import { FC } from 'react';
import Select, { Label } from '../atoms';
import { TOptions } from '../atoms/Select';

type TSelectGroup = {
	id: string;
	options: TOptions[];
};

const SelectGroup: FC<TSelectGroup> = ({ id, options }) => (
  <div>
		<Label htmlFor={id}>{id}</Label>
    <Select name={id} id={id} options={options} />
  </div>
);

export default SelectGroup;
