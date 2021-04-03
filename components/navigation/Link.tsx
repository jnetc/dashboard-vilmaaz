import Link from 'next/link';
import styled from 'styled-components';

import { NavLink } from './Nav';
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
    color: ${props => props.theme.grey_light};
    font-size: ${props => props.theme.fontsize_16};
    transition: all 0.3s ease-in-out;
  }
  svg {
    stroke: ${props => props.theme.grey_light};
    transition: all 0.3s ease-in-out;
  }
  span.link-name {
    margin-top: 10px;
  }
  &.active {
    a {
      border-color: ${props => props.theme.element};
      color: ${props => props.theme.white};
      box-shadow: 0 5px 5px rgba(${props => props.theme.shadow_green}, 0.15),
        0 20px 20px rgba(${props => props.theme.shadow_green}, 0.1);
    }
    svg {
      stroke: ${props => props.theme.white};
    }
  }
`;

// TYPE
export const UrlComponent = (props: { icon: JSX.Element; url: NavLink }) => {
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
