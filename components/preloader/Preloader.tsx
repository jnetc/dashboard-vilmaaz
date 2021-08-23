import { FC, useState } from 'react';
import { PreloaderStyle } from './Preloader.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';

const Preloader: FC = () => {
  const { isAppLoaded } = useGlobalStore();
  const [removePreloader, setRemovePreloader] = useState(false);

  return (
    <>
      {removePreloader ? null : (
        <PreloaderStyle
          onAnimationEnd={() => setRemovePreloader(true)}
          className={isAppLoaded ? 'hide-preloader' : ''}>
          <div id="preloader-box">
            <div id="preloader-icon"></div>
            <p>ladataan</p>
          </div>
        </PreloaderStyle>
      )}
    </>
  );
};
export default Preloader;
