import { useEffect, useState } from 'react'
import API from '../services/api'
import ScheduleCalendar from '../components/ScheduleCalendar'

const DUMMY_SHIFTS = [
  { id: 1, title: 'Morning Shift — Operations', start_time: '2026-05-23T08:00:00', end_time: '2026-05-23T16:00:00' },
  { id: 2, title: 'Evening Shift — Customer Support', start_time: '2026-05-23T16:00:00', end_time: '2026-05-24T00:00:00' },
  { id: 3, title: 'Morning Shift — Logistics', start_time: '2026-05-24T08:00:00', end_time: '2026-05-24T16:00:00' },
  { id: 4, title: 'Night Shift — Security', start_time: '2026-05-24T22:00:00', end_time: '2026-05-25T06:00:00' },
  { id: 5, title: 'Morning Shift — HR Team', start_time: '2026-05-25T09:00:00', end_time: '2026-05-25T17:00:00' },
  { id: 6, title: 'Afternoon Shift — IT Support', start_time: '2026-05-22T12:00:00', end_time: '2026-05-22T20:00:00' },
  { id: 7, title: 'Morning Shift — Finance', start_time: '2026-05-20T08:00:00', end_time: '2026-05-20T16:00:00' },
  { id: 8, title: 'Evening Shift — Operations', start_time: '2026-05-19T16:00:00', end_time: '2026-05-20T00:00:00' },
  { id: 9, title: 'Night Shift — Warehouse', start_time: '2026-05-18T22:00:00', end_time: '2026-05-19T06:00:00' },
  { id: 10, title: 'Morning Shift — Sales Team', start_time: '2026-05-17T08:00:00', end_time: '2026-05-17T16:00:00' },
]

export default function Dashboard() {
  const [shifts, setShifts] = useState(DUMMY_SHIFTS)

  useEffect(() => {
    const token = localStorage.getItem('wfm_token')
    if (token) API.defaults.headers.common['Authorization'] = `Bearer ${token}`
    API.get('/shifts').then(r => {
      if (r.data && r.data.length > 0) setShifts(r.data)
    }).catch(() => {})
  }, [])

  const now = new Date()
  const upcoming = shifts.filter(s => new Date(s.start_time) > now)
  const completed = shifts.filter(s => new Date(s.end_time) < now)
  const active = shifts.filter(s => new Date(s.start_time) <= now && new Date(s.end_time) >= now)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      fontFamily: "'Segoe UI', Arial, sans-serif",
    }}>
      <div style={{
        background: '#111',
        borderBottom: '1px solid #1e1e1e',
        padding: '1rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '1.1rem',
            fontWeight: '600',
            letterSpacing: '-0.5px',
            margin: 0
          }}>Workforce Manager</h1>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.2rem 0.6rem',
            background: '#1a1040',
            border: '1px solid #a78bfa',
            borderRadius: '999px',
            color: '#a78bfa'
          }}>Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#555', fontSize: '0.85rem' }}>Mandela Offonry</span>
          <div style={{
            width: '32px', height: '32px',
            background: '#1a1040',
            border: '1px solid #a78bfa',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#a78bfa', fontSize: '0.8rem', fontWeight: '600'
          }}>M</div>
        </div>
      </div>

      <div style={{ padding: '2.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#e8e8e8', fontSize: '1.3rem', fontWeight: '500', margin: '0 0 0.3rem 0' }}>
            Good morning, Mandela 👋
          </h2>
          <p style={{ color: '#555', fontSize: '0.9rem', margin: 0 }}>
            Here's what's happening with your workforce today.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {[
            { label: 'Total Shifts', value: shifts.length, color: '#a78bfa', sub: 'All time' },
            { label: 'Upcoming', value: upcoming.length, color: '#34d399', sub: 'Scheduled' },
            { label: 'Active Now', value: active.length, color: '#f97316', sub: 'In progress' },
            { label: 'Completed', value: completed.length, color: '#38bdf8', sub: 'This period' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.8rem 0' }}>{stat.label}</p>
              <p style={{ color: stat.color, fontSize: '2.2rem', fontWeight: '700', margin: '0 0 0.3rem 0', lineHeight: 1 }}>{stat.value}</p>
              <p style={{ color: '#333', fontSize: '0.75rem', margin: 0 }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: '#111',
          border: '1px solid #1e1e1e',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{ color: '#e8e8e8', fontSize: '1rem', fontWeight: '500', margin: 0 }}>Shift Schedule</h2>
            <span style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.7rem',
              border: '1px solid #1e1e1e',
              borderRadius: '4px',
              color: '#444',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>May 2026</span>
          </div>
          <ScheduleCalendar shifts={shifts} />
        </div>
      </div>
    </div>
  )
}
