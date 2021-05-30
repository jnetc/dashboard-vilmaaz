import { FC } from 'react';
import Link from 'next/link';
// Types
import { NavLink, NavigationProps } from '@types';
// Icons
import {
  Lessons,
  Schedule,
  Teachers,
  Notifications,
  Settings,
} from '../icons/Navigation48px';
import { Counter } from './Couter';
// Styles
import { LinkStyle } from './styles/navigation';

const UrlComponent: FC<NavigationProps> = props => (
  <LinkStyle
    className={`${props.url.active && 'active'}`}
    tabIndex={props.index + 1}>
    <Link href={props.url.href}>
      <a>
        {props.url.counter && <Counter />}
        {props.icon}
        <span className="link-name">{props.url.path}</span>
      </a>
    </Link>
  </LinkStyle>
);

// COMPONENT
const AltLink = ({ link, index }: { link: NavLink; index: number }) => {
  switch (link.href) {
    case '/schedule' || '/schedule/[user]':
      return <UrlComponent icon={<Schedule />} url={link} index={index} />;
    case '/teachers':
      return <UrlComponent icon={<Teachers />} url={link} index={index} />;
    case '/notifications':
      return <UrlComponent icon={<Notifications />} url={link} index={index} />;
    case '/settings':
      return <UrlComponent icon={<Settings />} url={link} index={index} />;
    default:
      return <UrlComponent icon={<Lessons />} url={link} index={index} />;
  }
};

export default AltLink;
