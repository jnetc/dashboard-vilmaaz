import { FC, ChangeEvent } from 'react';
// Style
import { SelectDayLabelStyle, SelectDayInputStyle } from './SelectDay.style';
// Helper func
import { firstUpperCase } from 'utils/helperFunctions';
//Types
import { Input } from '@Types';

export interface SelectDayType {
  day: string;
  isChecked: boolean;
  onChange: (ev: ChangeEvent<Input>) => void;
}

export const SelectDay: FC<SelectDayType> = ({ day, isChecked, onChange }) => {
  const dayStr = firstUpperCase(day);

  return (
    <>
      <SelectDayInputStyle
        type="checkbox"
        checked={isChecked}
        id={day}
        onChange={onChange}
        tabIndex={0}
      />
      <SelectDayLabelStyle htmlFor={day}>{dayStr}</SelectDayLabelStyle>
    </>
  );
};
