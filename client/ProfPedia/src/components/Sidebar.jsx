import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


function Sidebar({data}) {

  const {logout} = useLogout()

  
  return (
    <div className='side-bar'>
      <Link to = '/saved-professors'>My saved professors</Link>
      <Link to = '/my-ratings'>My ratings</Link>
      {data && <Link to = '/' onClick={async () => await logout()}>Logout</Link>}
      {!data && <Link to = '/login'>Login</Link>}
    </div>
  )
}

export default Sidebar