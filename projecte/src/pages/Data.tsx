import { styled } from 'styled-components';
import { Title } from '../components/atoms';
import { Body, SubHeader } from '../components/layouts';

const TitleStyled = styled(Title)`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;  
`;

const Data = () => {
  return (
    <Body>
      <SubHeader>
        <TitleStyled h={2}>Títol de prova</TitleStyled>
      </SubHeader>
    </Body>
  );
};

export default Data;
