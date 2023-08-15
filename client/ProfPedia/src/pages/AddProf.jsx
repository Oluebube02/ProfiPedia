import {React, useState} from 'react'
import { schools } from '../assets/schools'
import { AuthQuery } from '../hooks/AuthQuery'
import { AuthContext } from '../AuthContext/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

function AddProf({setAddedProf, setProf}) {
  const school_list = schools.map((school) => <option key={school.objectId} value = {school.name}>{school.name}</option>)
  const navigate = useNavigate()
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [school, setSchool] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {state, dispatch} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const url = 'http://localhost:3000/prof/add_prof'
    const firstName = firstname.trim().toLowerCase()
    const lastName = lastname.trimEnd().toLowerCase()
    const response =  await AuthQuery(url, 'POST', {firstName, lastName, school}, state, dispatch)
    const json = await response.json()
    if (!response.ok){
      setError("Please log in first. Redirecting...")
      console.log(error)
      setTimeout(() => {navigate('/login')}, "3000")
    }else{
      setIsLoading(false)
      setAddedProf(true)
      setProf(json)
      navigate('/rate-professor')


    }
    
    

  }
  return (
    <div className='auth-div'>
      <form className='auth-form'>
        <div>
            <label>Professor's First Name:</label>
          </div>
          <div>
            <input type='text' onChange = {(e) => setFirstName(e.target.value)} value ={firstname}></input>
          </div>
          <div>
            <label>Professor's Last Name:</label>
          </div>
          <div>
            <input type = 'text' onChange = {(e) => setLastName(e.target.value)} value ={lastname} ></input>
          </div>
          <div>
            <label>Professor's School:</label>
          </div>
          <div>
            <select onChange = {(e) => setSchool(e.target.value)} value ={school}>
              {school_list}
            </select>
          </div>
          <div>
            <button disabled = {isLoading} onClick={handleSubmit}>Add Professor</button>
            {error && <div>{error}</div>}
        </div>
      </form>
    </div>   
  )
}

export default AddProf