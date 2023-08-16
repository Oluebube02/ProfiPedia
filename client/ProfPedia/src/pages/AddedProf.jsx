import {React} from 'react'
import { Link } from 'react-router-dom'

function AddedProf({prof}) {

  return (
    <div>
       <div>
        <p>You have successfully added <strong>{`${prof.firstname} ${prof.lastname}`}</strong></p>
        <Link to = '/rate-professor'>Rate this professor</Link>
      </div>
      <form>

      </form>
    </div>
  )
}

export default AddedProf