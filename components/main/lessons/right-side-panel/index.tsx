import { FC, useEffect, useState, useRef } from 'react';
// Store
import { useMainStore } from '@Store/MainStore';
// Components
import { DayOfWeek } from '@Main/lessons/right-side-panel/DayOfWeek';
import { ProgressBar } from '@Main/lessons/right-side-panel/ProgressBar';
import { ProgressLessons } from '@Main/lessons/right-side-panel/ProgressLessons';
import CtrlButton, { CloseButtonStyle } from '@Buttons/ctrl-button/CtrlButton';
// Types
import { ProgressBarType, ProgressLessonsData, Element } from '@types';
import { transition } from '@Store/utils/helperFunc';
// Styles
import {
  RightSidePanelStyle,
  RightSidePanelHeader,
} from './styles/right-panel-styles';

export const RightSidePanel: FC = () => {
  const {
    detailLesson: { open, data },
    setDetailLesson,
    setAutoMovement,
  } = useMainStore();

  const [progressBar, setProgressBar] = useState<ProgressBarType>({
    line: '',
    bar: '',
    start: '',
    end: '',
  });

  const [progressLessons, setProgressLessons] = useState<ProgressLessonsData>({
    accent: '',
    shade: '',
    lessons: [],
  });

  const lessonRef = useRef<Element>(null);

  useEffect(() => {
    if (data) {
      const lastTimeEnd = data.timetable.length - 1;

      setProgressBar({
        start: data.timetable[0].time.start,
        end: data.timetable[lastTimeEnd].time.end,
        line: data.colors.accent,
        bar: data.colors.shade,
      });
      setProgressLessons({
        accent: data.colors.accent,
        shade: data.colors.shade,
        lessons: data.timetable,
      });
    }
  }, [data]);

  const openPanel = () => {
    setDetailLesson({ open: false, data: undefined });
    setAutoMovement(true);
    document.querySelector('body')?.classList.remove('right-side');
    document.querySelector('main')?.classList.remove('opacity');
  };

  useEffect(() => {
    transition(open, lessonRef, 'open', 'show');
  }, [open]);

  return (
    <RightSidePanelStyle open={open} ref={lessonRef}>
      <div>
        <RightSidePanelHeader>
          <DayOfWeek />
          <CtrlButton onClick={() => openPanel()}>
            <CloseButtonStyle />
          </CtrlButton>
        </RightSidePanelHeader>
        <h2>{data?.name}</h2>
        <ProgressBar data={progressBar} />
        <ProgressLessons data={progressLessons} />
      </div>
    </RightSidePanelStyle>
  );
};
