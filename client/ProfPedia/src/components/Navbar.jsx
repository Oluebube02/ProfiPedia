import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { baseQuery } from '../hooks/useAuthQuery'
import { useNavigate } from 'react-router-dom'

function Navbar({data, setProfList}) {
  const {logout} = useLogout()
  const navigate = useNavigate()
  const [searchParam, setSearchParam] = useState('')
  const [name, setName] = useState('')


  const handleLogout =  async () => {
     await logout()
  }

  const search = async (e) => {
    setProfList([])
    e.preventDefault()
    const fullname  = name.trim()
    const arr = fullname.split(' ')
    const first = arr[0]
    const last = arr.length == 2 ? arr[1] : ''
    setName('')
    
    if (searchParam == 'professor') {
      navigate('/find-professor/' + fullname)
      const url = `http://localhost:3000/prof/get_prof/${first}-${last}`
      const response = await baseQuery(url, 'GET', {})
      const json = await response.json()
      setProfList(json)
      
    }
  }

  return (
      <header>
        <div className='header'>
          <div className='header-title'><p>Prof<strong>Pedia</strong></p></div>
          <div className='header-search'>
            <input type = "text" placeholder='Search..' onChange={(e) => setName(e.target.value)} value = {name}></input>
            <select onChange = {(e) => setSearchParam(e.target.value)}>
              <option value='school'>School</option>
              <option value = 'professor'>Professor</option>
            </select>
            <button onClick={search}>{`Find ${searchParam}`}</button>
          </div>
          {!data && <div className='auth-links'>
            <Link to='/login'> Login </Link>
            <Link to = '/signup'>Sign up</Link>
          </div>}

          {data && <div className='header-user'>
            <Link to='/' onClick={handleLogout}> Logout </Link>
            <p>Hello, <strong>{data.data.email}</strong></p>
          </div>}
        </div>
      </header>

  )
}

export default Navbar