import { useEffect, useState } from 'react'
import API from '../services/api'
import ScheduleCalendar from '../components/ScheduleCalendar'

export default function Dashboard(){
  const [shifts, setShifts] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem('wfm_token')
    if(token) API.defaults.headers.common['Authorization'] = `Bearer ${token}`
    API.get('/shifts').then(r=>setShifts(r.data)).catch(()=>{})
  }, [])

  return (
    <div style={{padding:20}}>
      <h1>Dashboard</h1>
      <ScheduleCalendar shifts={shifts} />
    </div>
  )
}
