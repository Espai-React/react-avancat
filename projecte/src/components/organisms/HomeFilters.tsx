import { SelectGroup } from '../molecules';

const HomeFilters = () => (
  <div>
    <SelectGroup
      label="Tipus"
      id="type"
      name="type"
      options={[{ value: 'typeoption', labelOption: 'typeoption' }]}
      hiddenLabel
    />
    <SelectGroup
      label="Localització"
      id="location"
      name="location"
      options={[{ value: 'locationoption', labelOption: 'locationoption' }]}
      hiddenLabel
    />
  </div>
);

export default HomeFilters;
