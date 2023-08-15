import React from 'react'
import ProfTab from '../components/ProfTab'
import { Link } from 'react-router-dom'

function DisplayProfs({prof_list, setAddedProf, setProf}) {
  console.log("profs", prof_list)
  const displayProfs  = (arr) => arr.map(prof =>{
    const name = `${prof.firstname} ${prof.lastname}`
    return <ProfTab key = {name} prof ={prof} setAddedProf={setAddedProf} setProf={setProf}/>

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