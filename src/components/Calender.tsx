import React, { useState } from 'react'

function Calender() {
  const [currentMonth, setCurrentMont] = useState(new Date());
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div className='calender'>
      <div className='header'>Header</div>
      <div className='days'>Days</div>
      <div className='body'>Cells</div>
    </div>
  )
}

export default Calender
