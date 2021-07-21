import { FC } from 'react';
import { Alert, Copy, Delete } from './InputFeatures.style';

type InputFeatureName = 'alert' | 'copy' | 'delete';
interface Props {
  type: InputFeatureName;
}

export const InputFeatures: FC<Props> = ({ type }) => {
  const copy = false;
  switch (type) {
    case 'copy':
      return (
        <Copy role="button" tabIndex={0} copy={copy}>
          <span>Kopioi</span>
        </Copy>
      );
    case 'delete':
      return <Delete role="button" tabIndex={0} />;
    default:
      return <Alert role="button" />;
  }
};
