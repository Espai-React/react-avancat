import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';
import { colors, dimensions } from '../../styles';

type TSubHeader = {
  children: ReactNode;
};

const SubHeaderStyled = styled.div`
  background-color: ${colors.blue[100]};
  border-top: 1px solid ${colors.blue[200]};
  border-bottom: 1px solid ${colors.blue[200]};
  padding-left: ${dimensions.base};
  padding-right: ${dimensions.base};
`;

const SubHeader: FC<TSubHeader> = ({ children }) => (
  <SubHeaderStyled>{children}</SubHeaderStyled>
);

export default SubHeader;
