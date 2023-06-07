import { FC, SelectHTMLAttributes } from 'react';
import { styled } from 'styled-components';

type TOptions = {
  value: string;
  labelOption: string;
};

export type TSelect = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  id: string;
  options: TOptions[];
};

const Select: FC<TSelect> = ({ name, id, options, ...rest }) => (
    <select name={name} id={id} {...rest}>
      <option value="">--Please choose an option--</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.labelOption}
        </option>
      ))}
    </select>
);

export default styled(Select)``;
