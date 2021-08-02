import { FC, ChangeEvent, useState, useEffect, useRef } from 'react';
// Style
import { ScheduleLessonStyle } from './ScheduleLesson.style';
import { Lesson } from '@Types';
// Componets
import { InputFeatures } from './InputFeatures';
//Hook
import { useStepsStore } from '@Hooks/useStores';
// HelperFunc
import { transformTimeToNum } from '@Helpers';

interface LessonPropType {
  data: Lesson;
  getRows: (data: Lesson) => void;
  removeRow: (id: string) => void;
  hasError: {
    isError: boolean;
    message?: string;
    id?: string;
  };
}

export const ScheduleLesson: FC<LessonPropType> = ({
  data,
  getRows,
  removeRow,
  hasError,
}) => {
  const { dispatch } = useStepsStore();
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

  useEffect(() => {
    const typingCheck =
      lessonState.lesson.match(RegExp(/[\sa-яA-Я0-9]/gmu))?.join('') || '';

    if (typingCheck !== lessonState.lesson) {
      const error = {
        isError: true,
        id: lessonState.id,
        message: 'Käytä vain numeroita tai kirjaimia',
      };
      dispatch({ type: 'numbers-and-letters', payload: error });
    }

    if (typingCheck === lessonState.lesson) {
      dispatch({ type: 'no-errors', payload: { isError: false } });
    }

    getRows(lessonState);
  }, [lessonState]);

  return (
    <ScheduleLessonStyle styleErr={hasError?.isError}>
      {hasError?.isError ? (
        <span className="error-type">Käytäkää vain numeroita</span>
      ) : null}
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
        placeholder="matematiikka"
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
