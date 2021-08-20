import { FC, MouseEvent } from 'react';
import { Copy, Delete } from './InputFeatures.style';

type InputFeatureName = 'copy' | 'delete';
interface Props {
  type: InputFeatureName;
  isCopy?: boolean;
  onClick: (ev: MouseEvent<HTMLDivElement>) => void;
}

export const InputFeatures: FC<Props> = ({ type, onClick, isCopy }) => {
  switch (type) {
    case 'copy':
      return (
        <Copy
          role="button"
          onClick={ev => onClick(ev)}
          tabIndex={0}
          copy={isCopy}>
          <span>{isCopy ? 'Kopioitu' : 'Kopioi'}</span>
        </Copy>
      );
    case 'delete':
      return (
        <Delete role="button" onClick={ev => onClick(ev)} tabIndex={0}>
          <span>Poista rivi</span>
        </Delete>
      );
    default:
      return null;
  }
};
