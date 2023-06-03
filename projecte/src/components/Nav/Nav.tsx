import { FC } from 'react';
import "./nav.css";


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
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
