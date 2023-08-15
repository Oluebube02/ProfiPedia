import {React, useState} from 'react'
import { Link } from 'react-router-dom'

function RateProf({addedProf, prof}) {

  //const [justAdded, setJustAdded] = useState(addedProf)
  return (
    <div>
       <div>
        <p>You have successfully added <strong>{`${prof.firstname} ${prof.lastname}`}</strong></p>
        <Link>Rate this professor</Link>
      </div>
      <form>

      </form>
    </div>
  )
}

export default RateProf