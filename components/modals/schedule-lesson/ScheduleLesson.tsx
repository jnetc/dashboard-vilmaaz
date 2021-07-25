import { FC, MouseEvent, ChangeEvent, useState, useEffect } from 'react';
// Style
import { ScheduleLessonStyle } from './ScheduleLesson.style';
import { Lesson } from '@Types';
// Componets
import { InputFeatures } from './InputFeatures';
//Hook
import { useStepsStore } from '@Hooks/useStores';

interface LessonPropType {
  data: Lesson;
  getRows: (data: Lesson) => void;
  copyRow: (data: Lesson) => void;
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
  copyRow,
  removeRow,
  hasError,
}) => {
  const { dispatch } = useStepsStore();
  const [lessonState, setLessonState] = useState(data);

  const copy = (ev: MouseEvent<HTMLDivElement>) => {
    console.log(lessonState);
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
    setLessonState(prev => {
      return { ...prev, ...lessonState };
    });
  };

  const getEndTime = (ev: ChangeEvent<HTMLInputElement>) => {
    lessonState.end.time = ev.currentTarget.value;
    setLessonState(prev => {
      return { ...prev, ...lessonState };
    });
  };

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
        value={lessonState.lesson}
        required
      />
      <InputFeatures type="copy" onClick={copy} />
      <InputFeatures type="delete" onClick={remove} />
    </ScheduleLessonStyle>
  );
};
