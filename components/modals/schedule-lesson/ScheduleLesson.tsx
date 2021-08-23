import { FC, ChangeEvent, useState, useEffect, useRef } from 'react';
// Style
import { ScheduleLessonStyle } from './ScheduleLesson.style';
import { Lesson } from '@Types';
// Componets
import { InputFeatures } from './InputFeatures';
//Hook
import { useCommonUsersStore } from '@Hooks/useStores';
// HelperFunc
import { transformTimeToNum } from '@Helpers';

interface LessonPropType {
  data: Lesson;
  getRows: (data: Lesson) => void;
  removeRow: (id: string) => void;
}

export const ScheduleLesson: FC<LessonPropType> = ({
  data,
  getRows,
  removeRow,
}) => {
  const { error } = useCommonUsersStore();
  const [lessonState, setLessonState] = useState(data);
  const [isCopy, setIsCopy] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const copy = () => {
    if (!ref.current) return;
    if (ref.current.value === '') return;
    navigator.clipboard.writeText(ref.current.value);
    setIsCopy(true);
  };

  const remove = () => removeRow(lessonState.id);

  const getValue = (ev: ChangeEvent<HTMLInputElement>) => {
    lessonState.lesson = ev.currentTarget.value;

    getRows(lessonState);
    setLessonState(prev => {
      return { ...prev, ...lessonState };
    });
  };

  const getStartTime = (ev: ChangeEvent<HTMLInputElement>) => {
    lessonState.start.time = ev.currentTarget.value;
    lessonState.start.position = transformTimeToNum(ev.currentTarget.value);
    setLessonState(prev => {
      return { ...prev, ...lessonState };
    });
  };

  const getEndTime = (ev: ChangeEvent<HTMLInputElement>) => {
    lessonState.end.time = ev.currentTarget.value;
    lessonState.end.position = transformTimeToNum(ev.currentTarget.value);
    setLessonState(prev => {
      return { ...prev, ...lessonState };
    });
  };

  useEffect(() => {
    const clear = setTimeout(() => setIsCopy(false), 1000);
    return () => clearTimeout(clear);
  }, [isCopy]);

  return (
    <ScheduleLessonStyle
      styleErr={error.id?.includes(data.id) ?? error.isError ?? false}>
      <input
        type="time"
        name="lesson"
        onChange={getStartTime}
        value={lessonState.start.time}
        required
      />
      <span className="separator">-</span>
      <input
        type="time"
        name="lesson"
        onChange={getEndTime}
        value={lessonState.end.time}
        required
      />
      <input
        type="text"
        name="lesson"
        placeholder="Esim."
        autoComplete="off"
        onChange={getValue}
        ref={ref}
        value={lessonState.lesson}
        required
      />
      <InputFeatures type="copy" onClick={copy} isCopy={isCopy} />
      <InputFeatures type="delete" onClick={remove} />
    </ScheduleLessonStyle>
  );
};
