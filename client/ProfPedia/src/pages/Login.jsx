import {React,useState} from 'react'
import {Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)

  }


  return (
    <div className='auth-div'>
      <div className='login-container'>
        <form className='auth-form'>
          <div className='login-component'>
            <label>Email:</label>
          </div>
          <div className='login-input'>
            <input type='email' value = {email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email...'></input>
          </div>
          <div className='login-component'>
            <label>Password:</label>
          </div>
          <div className='login-input'>
            <input type = 'password' value = {password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input>
          </div>
          <div>
            <button disabled = {isLoading} onClick={handleSubmit}>Login</button><p>Don't have an account? </p>
            <Link to='/signup'>Sign up</Link>
            {error && <div>{error}</div>}
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login