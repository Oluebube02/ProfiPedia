import {React, useState, useContext} from 'react'
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from 'react-router';
import { AuthQuery } from '../hooks/AuthQuery';

function RateProf({prof}) {
  const fullname = `${prof.firstname} ${prof.lastname}`
  const [rating, setRating] = useState(null)
  const [course, setCourse] = useState('')
  const [difficulty, setDifficulty] = useState(null)
  const [textbook_use, setTextbook] = useState('')
  const [attendance, setAttendance] = useState('')
  const [review, setReview] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const {state} = useContext(AuthContext)

  const navigate = useNavigate()


  const radio_buttons = (handleChange, curr_val) => ['1', '2', '3', '4', '5'].map((num)=>
  <div key={num}>
    <input type ='radio' value ={num} onChange ={handleChange}checked={curr_val==num}></input><label>{num}</label>
  </div> )

  const handle_rating = (e) => setRating(Number(e.target.value))

  const handle_diff = (e) => setDifficulty(Number(e.target.value))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:3000/ratings/rate'
    const body = {course, rating, difficulty, textbook_use, attendance, review, prof_id:prof._id}
    const response =  await AuthQuery(url, 'POST', body, state)
    const data = await response.json()
    if (response.status===401 || response.status === 403){
      setError("Please log in first. Redirecting...")
      setTimeout(()=> navigate('/login'), 3000)
    }
    else if(response.status === 400){
      console.log(data)
      setError(data)
    }else{
      setSuccess(true)
    }
  }

  return (
    <div>
      <p>ADD RATING FOR: <strong>{fullname.toUpperCase()}</strong></p>
      <p>All fields are required</p>
      <form>
        <div>
          <label>Course:</label>
          <p>Please enter in lowercase with no space in between letters and numbers. Example : cs2110</p>
          <input type='text' value = {course} onChange={(e) => setCourse(e.target.value)}></input>
        </div>
        <div>
          <label>Rating:</label>
          <div>
            {radio_buttons(handle_rating, rating)}
          </div>
        </div>

        <div>
          <label>Difficulty:</label>
          <div>
            {radio_buttons(handle_diff, difficulty)}
          </div>
        </div>

        <div>
          <label>Attendance mandatory:</label>
          <div>
            <select onChange = {(e) => setAttendance(e.target.value)} value ={attendance}>
              <option ></option>
              <option key="Yes" value="Yes">Yes</option>
              <option key="No" value="No">No</option>
            </select>
          </div>
        </div>

        <div>
          <label>Textbook mandatory:</label>
          <div>
            <select onChange = {(e) => setTextbook(e.target.value)} value ={textbook_use}>
              <option ></option>
              <option key="Yes" value="Yes">Yes</option>
              <option key="No" value="No">No</option>
            </select>
          </div>
        </div>

        <div>
          <label>Write a review:</label>
          <p>Please be honest and respectful in your reviews.</p>
          <div>
            <textarea type='textarea' onChange = {(e) => setReview(e.target.value)} value ={review}>
            </textarea>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit review</button>
           <p>{error && error}</p>
          {success && <p>Rating successfully added!</p>}
        </div>
      </form>
    </div>
  )
}

export default RateProf