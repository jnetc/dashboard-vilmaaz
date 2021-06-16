import { FC, useState, useEffect } from 'react';
// Component
import { Button } from '@Buttons/Button';
// Styles
import { UpdateTimetableStyle } from '@styles/timeline';

export const UpdateTimetable: FC = () => {
  const [resize, setResize] = useState(0);

  useEffect(() => {
    const resize = () => {
      setResize(document.body.offsetWidth);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const hide = () => {
    setResize(0);
    window.location.reload();
  };

  return resize !== 0 ? (
    <UpdateTimetableStyle>
      <div>
        <h3>Päivitä oppitunnit</h3>
        <Button colorTheme={'primary'} onClick={hide}>
          PÄIVITÄ
        </Button>
      </div>
    </UpdateTimetableStyle>
  ) : (
    <></>
  );
};
