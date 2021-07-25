import { FC, MouseEvent } from 'react';
import { Alert, Copy, Delete } from './InputFeatures.style';

type InputFeatureName = 'alert' | 'copy' | 'delete';
interface Props {
  type: InputFeatureName;
  onClick: (ev: MouseEvent<HTMLDivElement>) => void;
}

export const InputFeatures: FC<Props> = ({ type, onClick }) => {
  const copy = false;
  switch (type) {
    case 'copy':
      return (
        <Copy
          role="button"
          onClick={ev => onClick(ev)}
          tabIndex={0}
          copy={copy}>
          <span>Kopioi</span>
        </Copy>
      );
    case 'delete':
      return (
        <Delete role="button" onClick={ev => onClick(ev)} tabIndex={0}>
          <span>Poista rivi</span>
        </Delete>
      );
    default:
      return <Alert role="button" />;
  }
};
