import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


function Sidebar({data}) {

  const {logout} = useLogout()

  
  return (
    <div className='side-bar'>
      <div><Link to = '/saved-professors'>My saved professors</Link></div>
      <div><Link to = '/my-ratings'>My ratings</Link></div>
      {data && <div><Link to = '/' onClick={async () => await logout()}>Logout</Link></div>}
      {!data && <div><Link to = '/login'>Login</Link></div>}
    </div>
  )
}

export default Sidebar