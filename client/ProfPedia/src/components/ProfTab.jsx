import React from 'react'

function ProfTab({name, difficulty, total_rating, avg_rating, school}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{school}</h2>
      <p>Difficulty : {difficulty}</p>
      <p>{total_rating} ratings</p>
      <p>{avg_rating} average rating</p>
    </div>
  )
}

export default ProfTab