import { styled } from 'styled-components';
import { FC } from 'react';
import { Text } from "./Text";

type TTitle = {
  h: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
};

const Title: FC<TTitle> = ({ children, h, ...rest }) => <Text as={`h${h}`} {...rest}
>{children}</Text>;

export default styled(Title)``;



