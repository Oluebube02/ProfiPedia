import { useState, useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { useNavigate } from 'react-router'
import { baseQuery } from './useAuthQuery'

export const useLogin = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const login = async (email, password) => {
    setIsLoading(true)
    setError('')
    const response = await baseQuery('http://localhost:3000/user/login', 'POST', { email, password})
    const data = await response.json()
    if (!response.ok) {
      setIsLoading(false)
      setError(data)
      
    }
    if (response.ok) {
      dispatch({type:'LOGIN', payload:data})
     
      setIsLoading(false)
      navigate('/')
    }
  }

  return { login, isLoading, error }
}