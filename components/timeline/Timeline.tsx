import { FC } from 'react';
// Global Context
import { useMainStore } from '@Store/MainStore';
// Components
import { TimelinePoints } from './TimelinePoints';
import { TimelineStep } from './TimelineStep';
// import { getTimePointPos } from '@Main/lessons/utils/timeline';

// Styles
import { TimelineStyle } from '@styles/timeline';
// import { transformTimeToNum2 } from '@Utils/helperFunc';

const Timeline: FC<{ width: number }> = ({ width }) => {
  const {
    // timepoints,
    // timelineWidth,
    // setTimelineWidth,
    // timeline,
    timelineHours,
  } = useMainStore();

  // const timelineEl = useRef<Element>(null);

  // let el = createRef();
  // useEffect(() => {
  //   // setStartEndTime(timepoints);
  //   // let el = timelineEl;
  //   // let width2 = timelineEl.current;

  //   console.log('Timeline - width', el);
  //   // if (timelineEl.current) {
  //   // setTimelineWidth(timelineWidth);
  //   // }
  // }, []);

  // console.log('create ref', el);

  // const timePointPositions = timepoints.map(t => {
  //   const position = transformTimeToNum2(t);
  //   return { time: t, position };
  // });

  // console.log(timelineHours);

  // const mergeArrs = [...timelineHours, ...timePointPositions];
  // const mergeArrs = timelineHours.concat(timePointPositions);
  // console.log([...timelineHours, ...timePointPositions]);
  // const timePointPositions = getTimePointPos(
  //   startEndTime,
  //   timelineWidth,
  //   timeline
  // );

  const points = timelineHours
    .sort((a, b) => {
      if (a.position < b.position) return -1;
      return 1;
    })
    .map((point, idx) => {
      return <TimelinePoints key={idx} data={point} />;
    });

  return (
    <TimelineStyle id="timeline">
      {points}
      <TimelineStep width={width} />
    </TimelineStyle>
  );
};

export default Timeline;
