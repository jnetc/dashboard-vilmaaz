import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Types
import { ProgressLessonsType } from '@types';

const ProgressLessonsStyle = styled.div`
  grid-row: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 0.4rem;
  transition: all 0.3s ease-in-out;
`;

// TODO Вывести список уроков

export const ProgressLessons: FC<{ data: ProgressLessonsType }> = ({
  data,
}) => {
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const realtime = useRealtime(minutes);
  console.log(realtime);

  return <ProgressLessonsStyle>Lessons{data.active}</ProgressLessonsStyle>;
};
