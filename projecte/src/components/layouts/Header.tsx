import { FC } from 'react';
import { styled } from 'styled-components';
import { Nav } from '../molecules';
import { mainNavigation } from '../../constants';
import { dimensions } from '../../styles';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${dimensions.base};
  padding-right: ${dimensions.base};
`;

const Header: FC = () => (
  <HeaderStyled>
    <h1>MIPISO.com.es</h1>
    <Nav links={mainNavigation} />
  </HeaderStyled>
);

export default Header;
