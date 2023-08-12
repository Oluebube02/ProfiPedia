import { useState, useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { useNavigate } from 'react-router'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { state, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const signup = async (email, password, school) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password, school })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json)
    }
    if (response.ok) {


      dispatch({type:'SIGNUP', payload:json})
      setIsLoading(false)
      navigate('/')
    }
  }

  return { signup, isLoading, error }
}