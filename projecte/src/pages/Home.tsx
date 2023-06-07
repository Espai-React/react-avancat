import { Body, SubHeader } from '../components/layouts';
import { HomeFilters } from '../components/organisms';

const Home = () => {
  return (
    <Body>
      <SubHeader>
        <HomeFilters />
      </SubHeader>
    </Body>
  );
};

export default Home;
