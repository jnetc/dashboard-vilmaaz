import { FC } from 'react';
import Image from 'next/image';
import { PanelProfileStyle } from '@styles/right-panel';
// Type
import { PanelProfileType } from '@types';
// Component
import { PanelProfileTime } from './PanelProfileTime';

export const PanelProfile: FC<{ data: PanelProfileType }> = ({ data }) => {
  const { avatar, name, end, lessons } = data;

  return (
    <PanelProfileStyle>
      <figure>
        {avatar.img ? (
          <Image
            src={avatar.img}
            alt={name}
            width={60}
            height={60}
            layout="fixed"
          />
        ) : (
          <figcaption>{avatar.name}</figcaption>
        )}
      </figure>
      <h4>{name}</h4>
      <PanelProfileTime endtime={end.position} />
      <p className="amount">
        Oppitunnit <b>{lessons}</b>
      </p>
      <button>•</button>
    </PanelProfileStyle>
  );
};
