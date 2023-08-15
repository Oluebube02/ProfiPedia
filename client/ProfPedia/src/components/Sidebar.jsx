import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='side-bar'>
      <Link to = '/saved-professors'>My saved professors</Link>
      <Link to = '/my-ratings'>My ratings</Link>
      <Link to = '/'>Logout</Link>
    </div>
  )
}

export default Sidebar