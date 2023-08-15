import React from 'react'
import { Link } from 'react-router-dom'

function ProfTab({prof, setAddedProf, setProf}) {
  const name = `${prof.firstname} ${prof.lastname}`
  return (
    <div>
      <h1>{name}</h1>
      <h2>{prof.school}</h2>
      <p>Difficulty : {prof.difficulty}</p>
      <p>{prof.total_rating} ratings</p>
      <p>{prof.avg_rating} average rating</p>
      <Link to ='/rate-professor' onClick={() => {setAddedProf(false), setProf(prof)}}>Rate this professor</Link>
    </div>
  )
}

export default ProfTab