import { baseAuthQuery } from "./useAuthQuery";


export const AuthQuery = async (url, method, body, state) =>{
  
  const Query = async () => {
    const response = await baseAuthQuery(url, method, body, state)
    return response

  }
  const val = await Query()
  return val
}