import { FC } from 'react';
import "./nav.css";
import { Text } from '../../atoms';


type TNav = {
  links: {
    name: string;
    url: string;
  }[];
};

const Nav: FC<TNav> = ({ links }) => (
  <nav>
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <Text as="a" href={link.url}>{link.name}</Text>
          {/* <a href={link.url}>{link.name}</a> */}
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
