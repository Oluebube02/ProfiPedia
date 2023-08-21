import React from 'react'
import { Link } from 'react-router-dom'

function ProfTab({prof, setProf}) {
  const name = `${prof.firstname} ${prof.lastname}`
  const {average_diff, average_rating, rating_count} = prof.rating_info
  return (
    <div>
      <h1>{name}</h1>
      <h2>{prof.school}</h2>
      <p>{`${average_diff} difficulty`}</p>
      <p>{`${rating_count} ratings`}</p>
      <p>{`${average_rating} average rating`}</p>
      <Link to ={`/rate-professor/${prof._id}`} onClick={() => setProf(prof)}>Rate this professor</Link>
      <Link to ='/view-ratings' onClick={() => setProf(prof)}>View ratings</Link>
    </div>
  )
}

export default ProfTab