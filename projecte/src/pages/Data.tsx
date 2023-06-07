import { styled } from 'styled-components';
import { Title } from '../components/atoms';
import { Body, SubHeader } from '../components/layouts';
import { Table } from '../components/organisms';
import { Container } from '../styles';

const TitleStyled = styled(Title)`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
`;

const columns = [
  { id: 'id', name: 'ID' },
  { id: 'name', name: 'Name' },
  { id: 'email', name: 'Email' },
];

const data = [
  { id: '1', name: 'John Doe', email: 'johndoe@example.com' },
  { id: '2', name: 'James Smith', email: 'jamessmith@example.com' },
  { id: '3', name: 'Jane Johnson', email: 'janejohnson@example.com' },
];

const Data = () => {
  return (
    <Body>
      <SubHeader>
        <TitleStyled h={2}>Títol de prova</TitleStyled>
      </SubHeader>
      <Container>
        <Table columns={columns} data={data} />
      </Container>
    </Body>
  );
};

export default Data;
