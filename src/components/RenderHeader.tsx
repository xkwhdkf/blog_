import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addMonths, subMonths } from 'date-fns';
import { format } from 'path'
import React, { useState } from 'react'



const RenderHeader = ({ currentMonth }:{currentMonth: any}) => {
  return (
    <div className='headerRow'>
      <div className='col-start'>
        <span className='text'>
          <span className='textMonth'>
            {format(currentMonth)}월
          </span>
          {format(currentMonth)}
        </span>
      </div>
      <div className='col-end'>
      <FontAwesomeIcon icon={"fa-solid fa-circle-arrow-left" as IconProp} />
      <FontAwesomeIcon icon={"fa-solid fa-circle-arrow-right" as IconProp} />
      </div>
    </div>
  );
};

export const Calender = () => {
  const [currentMonth, setCurrentMont] = useState(new Date());
  const [selectDate, setSelectDate] = useState(new Date());

  const prevMonth  = () => {
    setCurrentMont(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMont(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: any) => {
    setSelectDate(day);
  };
  return (
    <div className='calender'>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </div>
  )
}