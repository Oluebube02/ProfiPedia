import React from 'react'
import ProfTab from '../components/ProfTab'
import { Link } from 'react-router-dom'

function DisplayProfs({prof_list}) {
  console.log("profs", prof_list)
  const displayProfs  = (arr) => arr.map(prof =>{
    const {firstname, lastname, school, rating_info} = prof
    const name = `${firstname} ${lastname}`
    return <ProfTab key = {name} name ={name} school ={school}difficulty={rating_info.average_diff} total_rating={rating_info.total_rating} avg_rating={rating_info.average_rating}/>

  })
  return (
    <div>
      {prof_list.length == 0 && <div>
        <p>There is no professor with that name yet :( </p>
        <p>Don't see who you're looking for?</p>
        <Link to ='/add-professor'>Add a new professor</Link>
      </div>}
      {prof_list.length > 0 && displayProfs(prof_list)}
    </div>
  )
}

export default DisplayProfs