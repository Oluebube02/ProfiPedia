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
      <form className='auth-form'>
        <div>
          <label>Email:</label>
        </div>
        <div>
          <input type='email' value = {email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email..'></input>
        </div>
        <div>
          <label>Password:</label>
        </div>
        <div>
          <input type = 'password' value = {password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input>
        </div>
        <div>
          <button disabled = {isLoading} onClick={handleSubmit}>Login</button><p>Don't have an account? </p>
          <Link to='/signup'>Sign up</Link>
          {error && <div>{error}</div>}
        </div>
      </form>
    </div>
  )
}

export default Login