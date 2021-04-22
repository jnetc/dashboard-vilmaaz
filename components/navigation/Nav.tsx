import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { NavLink } from './types';

import AltLink from './Link';
import { Logo, MinLogo } from '../icons/Logos';

// STYLE COMPONENT
const NavigationStyle = styled.nav`
  display: grid;
  grid-template-rows: 120px 1fr;
  overflow-y: auto;
  justify-content: center;
  padding: 36px 0;
  svg.logo {
    justify-self: center;
    align-items: flex-start;
  }
  h1 {
    grid-row: 1;
  }
  ul {
    grid-row: 2;
    justify-self: center;
    align-self: center;
  }
`;

export const navigation: Array<NavLink> = [
  {
    href: '/',
    path: 'Oppitunnit',
    active: true,
    counter: false,
  },
  {
    href: '/schedule',
    path: 'Lukujärjestys',
    active: false,
    counter: false,
  },
  {
    href: '/teachers',
    path: 'Opettajat',
    active: false,
    counter: false,
  },
  {
    href: '/notifications',
    path: 'Ilmoitukset',
    active: false,
    counter: true,
  },
  {
    href: '/settings',
    path: 'Asetukset',
    active: false,
    counter: false,
  },
];

// COMPONENT
const Navigation: FC = () => {
  const links = navigation.map(link => {
    link.active = false;
    // Init sublink - /link/sublink
    const sublink = useRouter().pathname.split('/')[1];

    if (link.href === useRouter().pathname || link.href === `/${sublink}`) {
      link.active = true;
    }

    return <AltLink key={link.path} link={link} />;
  });

  return (
    <NavigationStyle>
      <Logo />
      <ul>{links}</ul>
    </NavigationStyle>
  );
};

export default Navigation;
