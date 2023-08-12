import { schools } from '../assets/schools'
import {React,useState} from 'react'
import { useSignup } from '../hooks/useSignup'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [school, setSchool] = useState('')
  const {signup, error, isLoading} = useSignup()

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password, school)

  }



  const school_list = schools.map((school) => <option key={school.objectId} value = {school.name}>{school.name}</option>)
  return (
    <div className='auth-div'>
      <form className='auth-form'>
        <div>
            <label>Email:</label>
          </div>
          <div>
            <input type='email'  onChange = {(e) => setEmail(e.target.value)} value ={email}></input>
          </div>
          <div>
            <label>Password:</label>
          </div>
          <div>
            <input type = 'password' onChange = {(e) => setPassword(e.target.value)} value ={password} ></input>
          </div>
          <div>
            <label>School:</label>
          </div>
          <div>
            <select onChange = {(e) => setSchool(e.target.value)} value ={school}>
              {school_list}
            </select>
          </div>
          <div>
            <button disabled = {isLoading} onClick={handleSubmit}>Sign up</button>
            {error && <div>{error}</div>}
        </div>
      </form>
    </div>
  )
}

export default SignUp