import { FC } from 'react';
// Types
import { ProgressBarType } from '@types';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Component
import { ProgressTime } from './ProgressTime';
// Helper functions
import { transformTimeToNum, transformNumToTime } from '@Utils/helperFunc';
// Styles
import {
  BarStyle,
  ProgressBarStyle,
  SvgStyle,
  ProgressStyle,
} from './styles/right-panel-styles';

export const ProgressBar: FC<{ data: ProgressBarType }> = ({ data }) => {
  const { bar, line, ...time } = data;
  const { currentTimeNum } = useUpdate();
  const radius = 100;
  const circumference = Math.round(2 * Math.PI * radius); // 2 * (π = 3,14) * (r = 100)
  const startDrawPoint = transformTimeToNum(time.start);
  const endDrawPoint = transformTimeToNum(time.end);
  const totalTime = endDrawPoint - startDrawPoint;
  const start = currentTimeNum - startDrawPoint;

  let step = 0;
  let showMeTime = '';

  if (currentTimeNum < startDrawPoint) {
    step = circumference;
    showMeTime = 'SLEEP';
  } else if (endDrawPoint <= currentTimeNum) {
    step = 0;
    showMeTime = 'DONE';
  } else {
    const timeByStep = (start * 100) / totalTime;
    const calcStep = (timeByStep * circumference) / 100;
    step = circumference - calcStep;

    const calcTime = endDrawPoint - currentTimeNum;
    showMeTime = transformNumToTime(calcTime);
  }

  return (
    <ProgressBarStyle className="perespective">
      <SvgStyle width="226" height="226" viewBox="0 0 226 226">
        <BarStyle cx="113" cy="113" r={radius} barColor={bar} />
        <ProgressStyle
          cx="113"
          cy="113"
          r={radius}
          lineColor={line}
          track={circumference}
          progress={step}
        />
      </SvgStyle>
      <ProgressTime time={showMeTime} />
    </ProgressBarStyle>
  );
};
