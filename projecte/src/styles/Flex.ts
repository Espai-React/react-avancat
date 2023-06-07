import { styled } from 'styled-components';

type TFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type TFlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type TFlexAlign = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type TFlex = {
  direction?: TFlexDirection;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  wrap?: TFlexWrap;
  gap?: string;
};

export const Flex = styled.div<TFlex>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};
`;
