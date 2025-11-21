import { useState } from 'react'
import API, { setAuth } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const nav = useNavigate()

  async function submit(e){
    e.preventDefault()
    try{
      const form = new URLSearchParams()
      form.append('username', email)
      form.append('password', password)
      const res = await API.post('/auth/token', form)
      const token = res.data.access_token
      setAuth(token)
      localStorage.setItem('wfm_token', token)
      nav('/dashboard')
    }catch(err){
      setError('Login failed')
    }
  }

  return (
    <div style={{maxWidth:400, margin:'2rem auto'}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
