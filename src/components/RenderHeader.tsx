import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDays, addMonths, endOfMonth, endOfWeek, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import { format, parse } from 'path'
import React, { useState } from 'react'





const RenderHeader = ({ currentMonth , prevMonth, nextMonth}: {currentMonth:any; prevMonth:any;nextMonth: any}) => {
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

const RenderDay= () => {
  const day = [];
  const date = ['일', '월', '화', '수', '목', '금' ];

  for(let i=0; i<7; i++) {
    day.push(
      <div className='col' key={i}>
        {date[i]}
      </div>
    );
  }
  return <div className='day row'>{day}</div>
}

const RenderCells = ({ currentMonth, selectedDate, onDateClick }: { currentMonth: any; selectedDate: any; onDateClick: any }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
          formattedDate = format(day, 'd');
          const cloneDay = day;
          days.push(
              <div
                  className={`col cell ${
                      !isSameMonth(day, monthStart)
                          ? 'disabled'
                          : isSameDay(day, selectedDate)
                          ? 'selected'
                          : format(currentMonth, 'M') !== format(day, 'M')
                          ? 'not-valid'
                          : 'valid'
                  }`}
                  key={day.getTime()} // Use a unique identifier for the key
                  onClick={() => onDateClick(parse(cloneDay))}
              >
                  <span
                      className={
                          format(currentMonth, 'M') !== format(day, 'M')
                              ? 'text not-valid'
                              : ''
                      }
                  >
                      {formattedDate}
                  </span>
              </div>
          );
          day = addDays(day, 1);
      }
      rows.push(
          <div className="row" key={day.getTime()}> {/* Use a unique identifier for the key */}
              {days}
          </div>
      );
      days = [];
  }
  return <div className="body">{rows}</div>;
};



export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
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
      <RenderDay />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  )
}