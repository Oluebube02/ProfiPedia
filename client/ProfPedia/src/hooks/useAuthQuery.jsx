
export const baseQuery = async (url, method, body) => {
  if (method == 'POST'){
    const response = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      credentials:'include',
      body: JSON.stringify(body)
    })
    return response
  }
  else{
    const response = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
    })
    return response 
  }
}


export const baseAuthQuery = async (url, method, body, state) => {

  const response = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json', 'Authorization' : `Bearer ${state.data?.accessToken}`},
      credentials:'include',
      body: JSON.stringify(body)
    })
    console.log("pre json", response.headers)
    return response


}




