
export const baseQuery = async (url, method, body) => {
  const response = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
  

  return response


}


export const baseAuthQuery = async (url, method, body, state) => {

  const response = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json', 'Authorization' : `Bearer ${state.data?.accessToken}`},
      body: JSON.stringify(body)
    })
    
    return response


}




