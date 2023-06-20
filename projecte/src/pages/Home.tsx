import { FC, useMemo } from 'react';
import { Body, SubHeader } from '../components/layouts';
import { HomeFilters } from '../components/organisms';
import { Container } from '../styles';
import { useFetch } from '../hooks/useFetch';

export type THouses = {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  city: string;
  district: string;
  published: string;
  [key: string]: unknown;
};

const Houses: FC = () => {
  const { data, loading, error } = useFetch<THouses[]>(
    'http://localhost:3004/pisos'
  );

  const filteredData = useMemo(() => {
    return data?.filter((house) => house.city === 'barcelona');
  }, [data]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>Error...</Container>;
  
  return (
    <Container>
      {filteredData?.map((house) => (
        <div key={house.id}>
          <h2>{house.title}</h2>
          <img src={house.image} width="200" alt={`House number ${house.id}`} />
          <p>{house.price}</p>
          <p>{house.city}</p>
        </div>
      ))}
    </Container>
  );
};

const Home = () => {
  return (
    <Body>
      <SubHeader>
        <HomeFilters />
      </SubHeader>
      <Houses />
    </Body>
  );
};

export default Home;
