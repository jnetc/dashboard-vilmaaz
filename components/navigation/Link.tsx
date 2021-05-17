import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// Types
import { NavLink, NavigationProps } from '@types';

import {
  Lessons,
  Schedule,
  Teachers,
  Notifications,
  Settings,
} from '../icons/Navigation48px';
import { Counter } from './Couter';

// STYLE COMPONENT
const LinkStyle = styled.li`
  margin-bottom: 1.9rem;
  width: 7.5rem;
  height: 7.5rem;
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
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_16};
    transition: all 0.3s ease-in-out;
    user-select: none;
  }
  svg {
    stroke: ${({ theme }) => theme.grey_light()};
    transition: all 0.3s ease-in-out;
  }
  span.link-name {
    margin-top: 10px;
  }
  &:hover,
  &:focus {
    a {
      color: ${({ theme }) => theme.white()};
    }
    svg {
      stroke: ${({ theme }) => theme.white()};
    }
  }
  &.active {
    a {
      border-color: ${({ theme }) => theme.primary()};
      color: ${({ theme }) => theme.white()};
      box-shadow: 0 5px 5px ${({ theme }) => theme.primary(0.15)},
        0 20px 20px ${({ theme }) => theme.primary(0.1)};
    }
    svg {
      stroke: ${({ theme }) => theme.white()};
    }
  }
`;

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
