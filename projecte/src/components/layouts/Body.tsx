import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';
import Header from './Header';

const BodyStyled = styled.div``;

type TBody = {
  children: ReactNode;
};

const Body: FC<TBody> = ({ children }) => (
  <BodyStyled>
    <Header />
    {children}
  </BodyStyled>
);

export default Body;
