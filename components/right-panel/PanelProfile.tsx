import { FC } from 'react';
import Image from 'next/image';
import { PanelProfileStyle } from '@styles/right-panel';
// Type
import { PanelProfileType } from '@types';
// Component
import { PanelProfileTime } from './PanelProfileTime';

export const PanelProfile: FC<{ data: PanelProfileType }> = ({ data }) => {
  console.log(data);

  return (
    <PanelProfileStyle>
      <figure>
        {data.avatar.img ? (
          <Image
            src={data.avatar.img}
            alt={data.name}
            width={60}
            height={60}
            layout="fixed"
          />
        ) : (
          <figcaption>{data.avatar.name}</figcaption>
        )}
      </figure>
      <h4>{data.name}</h4>
      <PanelProfileTime endtime={data.end.position} />
      <button>•</button>
    </PanelProfileStyle>
  );
};
