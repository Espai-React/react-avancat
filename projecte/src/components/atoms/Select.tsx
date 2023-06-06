import { FC, SelectHTMLAttributes } from 'react';

export type TOptions = {
  value: string;
  labelOption: string;
};

type TSelect = SelectHTMLAttributes<HTMLSelectElement> & {
	name: string;
	id: string;
  options: TOptions[];
}
	
const Select: FC<TSelect> = ({ name, id, options }) => {
  return (
		<select name={name} id={id}>
			<option value="">Selecciona</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.labelOption}</option>
      ))}
    </select>
  );
};

export default Select;
