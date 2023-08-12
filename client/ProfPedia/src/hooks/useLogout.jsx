import { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { useNavigate } from 'react-router'

export const useLogout = () => {
  const { dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = async () => {
  

    const response = await fetch('http://localhost:3000/user/logout', {
      method: 'POST',
      credentials: "include",
      withCredentials : true
    })


    dispatch({type:'LOGOUT'})
    
    navigate('/')
    
  }

  return { logout}
}