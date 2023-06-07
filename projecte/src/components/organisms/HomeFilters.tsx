import { styled } from 'styled-components';
import { SelectGroup } from '../molecules';
import { Flex, dimensions } from '../../styles';

const types = [
  { value: 'house', labelOption: 'House' },
  { value: 'apartment', labelOption: 'Apartment' },
  { value: 'townHouse', labelOption: 'townHouse' },
];

const locations = [
  { value: 'barcelona', labelOption: 'Barcelona' },
  { value: 'madrid', labelOption: 'Madrid' },
  { value: 'valencia', labelOption: 'Valencia' },
];

const HomeFilterStyled = styled(Flex)`
  gap: ${dimensions.base};

  /* div:first-of-type {
    ${SelectGroup} {
      margin-right: ${dimensions.base};
    }
  } */
`;

const HomeFilters = () => (
  <HomeFilterStyled direction="row">
    <SelectGroup
      label="Tipus"
      id="type"
      name="type"
      options={types}
      hiddenLabel
    />
    <SelectGroup
      label="Localització"
      id="location"
      name="location"
      options={locations}
      hiddenLabel
    />
  </HomeFilterStyled>
);

export default styled(HomeFilters)``;
