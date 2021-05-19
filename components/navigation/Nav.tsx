import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
// Types
import { NavLink } from '@types';
// Components
import AltLink from './Link';
import { Logo } from '../icons/Logos';
// Store
import { useGlobalStore } from '@Store/GlobalStore';

// STYLE COMPONENT
const NavigationStyle = styled.nav`
  min-width: 220px;
  min-height: 100%;
  overflow-y: auto;
  display: grid;
  /* display: none; */
  grid-template-rows: 120px 1fr;
  justify-content: center;
  padding: 35px 0;
  svg.logo {
    justify-self: center;
    align-items: flex-start;
  }
  ul {
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
  const { openMenu } = useGlobalStore();
  const links = navigation.map((link, idx) => {
    link.active = false;
    // Init sublink - /link/sublink
    const sublink = useRouter().pathname.split('/')[1];

    if (link.href === useRouter().pathname || link.href === `/${sublink}`) {
      link.active = true;
    }

    return <AltLink key={link.path} link={link} index={idx} />;
  });

  return openMenu ? (
    <NavigationStyle>
      <Logo />
      <ul>{links}</ul>
    </NavigationStyle>
  ) : (
    <></>
  );
};

export default Navigation;
