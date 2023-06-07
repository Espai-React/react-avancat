import { FC } from 'react';
import { styled } from 'styled-components';
import { Nav } from '../molecules';
import { mainNavigation } from '../../constants';
import { Container } from '../../styles';

const HeaderStyled = styled(Container)``;

const Header: FC = () => (
  <HeaderStyled direction="row" align="center" justify="space-between">
    <h1>MIPISO.com.es</h1>
    <Nav links={mainNavigation} />
  </HeaderStyled>
);

export default Header;
