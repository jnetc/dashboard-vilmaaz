import { FC } from 'react';
// Types
import { LessonComponent } from '@types';
// Style
import { PendingLessonStyle, BreakStyle } from '@styles/lessons';

export const PendingLesson: FC<LessonComponent> = ({
  width,
  colors,
  lesson,
  start,
  end,
}) => {
  return lesson !== 'taukko' ? (
    <PendingLessonStyle lessonWidth={width} colors={colors}>
      <div className="lesson-duration">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path
            d="M8.4397 3.95419V8.96282L11.1287 11.0155M16.2372 8.48083C16.2372 12.623 12.8793 15.9808 8.73715 15.9808C4.59502 15.9808 1.23715 12.623 1.23715 8.48083C1.23715 4.3387 4.59502 0.980835 8.73715 0.980835C12.8793 0.980835 16.2372 4.3387 16.2372 8.48083Z"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <time>
          {start.time} - {end.time}
        </time>
      </div>
      <p className="lesson-name">{lesson}</p>
      <div className="lesson-status">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="24" className="track"></circle>
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="pending-icon">
          <path
            d="M2 1.98602H14L2 13.986H14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="pending-icon-animation">
          <path
            d="M2 1.98602H14L2 13.986H14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </PendingLessonStyle>
  ) : (
    <BreakStyle lessonWidth={width} colors={colors}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" className="track"></circle>
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="pending-icon">
        <path
          d="M2 1.98602H14L2 13.986H14"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="pending-icon-animation">
        <path
          d="M2 1.98602H14L2 13.986H14"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BreakStyle>
  );
};
