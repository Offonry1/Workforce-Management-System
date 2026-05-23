import { useState } from 'react'
import API, { setAuth } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const nav = useNavigate()

  async function submit(e) {
    e.preventDefault()
    try {
      const form = new URLSearchParams()
      form.append('username', email)
      form.append('password', password)
      const res = await API.post('/auth/token', form)
      const token = res.data.access_token
      setAuth(token)
      localStorage.setItem('wfm_token', token)
      nav('/dashboard')
    } catch (err) {
      setError('Login failed. Please check your credentials.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Arial, sans-serif"
    }}>
      <div style={{
        background: '#111',
        border: '1px solid #1e1e1e',
        borderRadius: '16px',
        padding: '3rem 2.5rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '1.6rem',
            fontWeight: '600',
            marginBottom: '0.4rem',
            letterSpacing: '-0.5px'
          }}>Workforce Manager</h1>
          <p style={{ color: '#555', fontSize: '0.9rem' }}>Sign in to your account</p>
        </div>

        <form onSubmit={submit}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{
              display: 'block',
              color: '#888',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem'
            }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#e8e8e8',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = '#a78bfa'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
          </div>

          <div style={{ marginBottom: '1.8rem' }}>
            <label style={{
              display: 'block',
              color: '#888',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem'
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                color: '#e8e8e8',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = '#a78bfa'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
          </div>

          {error && (
            <div style={{
              background: '#1a0a0a',
              border: '1px solid #3a1a1a',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              color: '#f87171',
              fontSize: '0.85rem',
              marginBottom: '1.2rem'
            }}>{error}</div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.85rem',
              background: '#a78bfa',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onMouseOver={e => e.target.style.background = '#9061f9'}
            onMouseOut={e => e.target.style.background = '#a78bfa'}
          >Sign In</button>
        </form>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #1e1e1e',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          {['Python', 'FastAPI', 'React', 'Docker'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.6rem',
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '4px',
              color: '#555'
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
