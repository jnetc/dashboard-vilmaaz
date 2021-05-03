export type NavLink = {
  href: string;
  path: string;
  active: boolean;
  counter: boolean;
};

export type Props = {
  icon: JSX.Element;
  url: NavLink;
  index: number;
};

export type Div = HTMLDivElement;

export type Element = Div | null;
