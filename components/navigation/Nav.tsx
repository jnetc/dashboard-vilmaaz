import { FC, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
// Types
import { NavLink } from '@types';
// Components
import AltLink from './Link';
import { Logo } from '../icons/Logos';
// Store
import { useGlobalStore } from '@Store/GlobalStore';
// Styles
import { NavigationStyle } from './styles/navigation';

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
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // transition(openMenu, navRef, 'open', 'show');
  }, [openMenu]);

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
    <NavigationStyle ref={navRef}>
      <div>
        <Logo />
        <ul>{links}</ul>
      </div>
    </NavigationStyle>
  ) : (
    <></>
  );
};

export default Navigation;
