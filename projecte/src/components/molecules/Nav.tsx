import { styled } from 'styled-components';
import { FC } from 'react';
import { Text } from '../atoms';

type TNav = {
  links: {
    label: string;
    url: string;
  }[];
};

const NavStyled = styled.nav`
  ul {
    display: flex;
    // gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-left: 1rem;

      ${Text} {
        text-decoration: none;
        color: red;
      }
    }
  }
`;

const Nav: FC<TNav> = ({ links }) => (
  <NavStyled>
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <Text as="a" href={link.url}>
            {link.label}
          </Text>
        </li>
      ))}
    </ul>
  </NavStyled>
);

export default styled(Nav)``;
