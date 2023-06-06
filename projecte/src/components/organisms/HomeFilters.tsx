import SelectGroup from '../molecules/SelectGroup';

const HomeFilters = () => (
  <div>
    <SelectGroup
      id="type"
      options={[{ value: 'typeoption', labelOption: 'typeoption' }]}
    />
    <SelectGroup
      id="location"
      options={[{ value: 'locationoption', labelOption: 'locationoption' }]}
    />
  </div>
);

export default HomeFilters;
