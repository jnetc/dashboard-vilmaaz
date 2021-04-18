export type ButtonStyleType = {
  isFill?: boolean;
  colorTheme: string;
};

type Styled = ({ isFill?: true } | { isFill: never }) &
  (
    | { colorTheme: 'primary' }
    | { colorTheme: 'default' }
    | { colorTheme: 'danger' }
  );

export type Props = { children: React.ReactChild } & Styled;
