import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Helper functions
import {
  transformTimeToNum,
  transformNumToTime,
} from '@Store/utils/helperFunc';

const ProgressTimeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  time {
    color: ${({ theme }) => theme.white()};
    font-size: ${({ theme }) => theme.fontsize_48};
    font-weight: bold;
  }
  span {
    color: ${({ theme }) => theme.grey_light()};
  }
`;

export const ProgressTime: FC<{ data: { start: string; end: string } }> = ({
  data,
}) => {
  const { start, end } = data;
  // const [time, setTime] = useState<string>('5:15');
  let time;
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const realtime = useRealtime(minutes);

  console.log('progress_', realtime.timeNumber, start, end);

  const starProgresstTime = Math.sign(
    realtime.timeNumber - transformTimeToNum(start)
  );
  const endProgressTime = transformTimeToNum(end);

  if (starProgresstTime === -1 || endProgressTime <= realtime.timeNumber) {
    time = '00:00';
  } else {
    const calcTime = endProgressTime - realtime.timeNumber;
    time = transformNumToTime(calcTime);
  }

  return (
    <ProgressTimeStyle>
      <time>{time}</time>
      <span>oppimisaika</span>
    </ProgressTimeStyle>
  );
};
