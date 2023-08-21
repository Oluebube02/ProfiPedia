import {React, createContext, useReducer} from 'react'


export const AuthContext = createContext()

const setAuthData = (state, action) => {
  switch (action.type){
    case 'LOGIN':
      return {data:action.payload}
    case 'SIGNIN':
      return {data:action.payload}
    case 'LOGOUT':
      return action.payload
    default:
      return state
  }

}

const AuthContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(setAuthData, {data: null})

  return (
    <AuthContext.Provider value = {{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

