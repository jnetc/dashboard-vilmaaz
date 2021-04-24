import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// Types
import { NavLink, Props } from './types';

import {
  Lessons,
  Schedule,
  Teachers,
  Notifications,
  Settings,
} from '../icons/Icons48px';
import { Counter } from './Couter';

// STYLE COMPONENT
const LinkStyle = styled.li`
  margin-bottom: 30px;
  width: 120px;
  height: 120px;
  a {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.grey_light};
    font-size: ${({ theme }) => theme.fontsize_16};
    transition: all 0.3s ease-in-out;
  }
  svg {
    stroke: ${({ theme }) => theme.grey_light};
    transition: all 0.3s ease-in-out;
  }
  span.link-name {
    margin-top: 10px;
  }
  &.active {
    a {
      border-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
      box-shadow: 0 5px 5px ${({ theme }) => theme.shadow_primary(0.15)},
        0 20px 20px ${({ theme }) => theme.shadow_primary(0.1)};
    }
    svg {
      stroke: ${({ theme }) => theme.white};
    }
  }
`;

// TYPE
export const UrlComponent: FC<Props> = props => {
  return (
    <LinkStyle className={`${props.url.active && 'active'}`}>
      <Link href={props.url.href}>
        <a>
          {props.url.counter && <Counter />}
          {props.icon}
          <span className="link-name">{props.url.path}</span>
        </a>
      </Link>
    </LinkStyle>
  );
};

// COMPONENT
const AltLink = ({ link }: { link: NavLink }) => {
  switch (link.href) {
    case '/schedule' || '/schedule/[user]':
      return <UrlComponent icon={<Schedule />} url={link} />;
    case '/teachers':
      return <UrlComponent icon={<Teachers />} url={link} />;
    case '/notifications':
      return <UrlComponent icon={<Notifications />} url={link} />;
    case '/settings':
      return <UrlComponent icon={<Settings />} url={link} />;
    default:
      return <UrlComponent icon={<Lessons />} url={link} />;
  }
};

export default AltLink;
