import React from 'react'

export default function ScheduleCalendar({ shifts }) {
  return (
    <div>
      {shifts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#333',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
          <p style={{ color: '#555', fontSize: '0.9rem' }}>No shifts scheduled yet</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {shifts.map(s => (
            <div key={s.id} style={{
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '8px',
              padding: '1rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ color: '#e8e8e8', fontWeight: '500', margin: '0 0 0.3rem 0', fontSize: '0.95rem' }}>{s.title}</p>
                <p style={{ color: '#555', fontSize: '0.8rem', margin: 0 }}>
                  {new Date(s.start_time).toLocaleString()} → {new Date(s.end_time).toLocaleString()}
                </p>
              </div>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.65rem',
                background: '#1a1040',
                border: '1px solid #a78bfa',
                borderRadius: '999px',
                color: '#a78bfa'
              }}>Scheduled</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
