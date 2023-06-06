import { styled } from 'styled-components';
import { Text } from './Text';

type TLabel = {
  htmlFor: string;
  children: string;
};

const LabelStyled = styled(Text)<TLabel>``;

export const Label = ({ htmlFor, children }: TLabel) => (
  <LabelStyled as="label" htmlFor={htmlFor}>{children}</LabelStyled>
);

export default styled(Label)``;
