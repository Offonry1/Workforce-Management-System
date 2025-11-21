import React from 'react'

export default function ScheduleCalendar({shifts}){
  return (
    <div>
      <h3>Upcoming shifts</h3>
      <ul>
        {shifts.map(s=> (
          <li key={s.id}>{new Date(s.start_time).toLocaleString()} - {new Date(s.end_time).toLocaleString()} : {s.title}</li>
        ))}
      </ul>
    </div>
  )
}
