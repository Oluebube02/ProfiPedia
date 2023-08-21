const User = require('../models/User')

const jwt = require('jsonwebtoken')


const createToken = (user) => {
  const accessToken = jwt.sign(
    {
        "id" : user._id,
        "email" : user.email
    },
    process.env.ACCESS_SECRET,
    { expiresIn: '5h' }
  )

  const refreshToken = jwt.sign(
      { "email": user.email },
      process.env.REFRESH_SECRET,
      { expiresIn: '1d' }
  )


  return {accessToken, refreshToken}
}



const signup = async (req, res) => {

  const {email, password, school} = req.body


  const user = await User.signup(res, email, password, school)
  if (user){
    const {accessToken, refreshToken} = createToken(user)
    res.cookie('jwt', refreshToken, {
      httpOnly: true,  
      secure:true,
      sameSite: 'None',  
      maxAge: 24 * 60 *60* 1000 
    })
    res.status(200).json({accessToken, data : {id:user._id, email: email}})
    
    
  }

}



const login = async (req, res) => {
  console.log("req cook", req.cookies)

  const {email, password} = req.body

  
  const user = await User.login(res, email, password) 
  if (user){
    const {accessToken, refreshToken} = createToken(user)
    res.cookie('jwt', refreshToken, {
      httpOnly: true,  
      sameSite: 'None',  
      maxAge: 24 * 60 *60* 1000 
    })
    res.status(200).json({accessToken, data : {id:user._id, email: email}})
   

  }
  
  
}



const logout = (req, res) => {
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
  res.json({ data: null  })
}


const refresh = (req, res) => {
  const cookies = req.cookies
  
  if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

  const refreshToken = cookies.jwt

  jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
          if (err) return res.status(403).json({ message: 'Forbidden' })

          const foundUser = await User.findOne({ email : decoded.email })

          if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

          const accessToken = jwt.sign(
              {
                 "id":foundUser._id,
                 "email":foundUser.email
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '1m' }
          )

          res.json({ accessToken, data : {id:foundUser._id, email: foundUser.email} })
      })
  
}

module.exports ={
  signup, login, logout, refresh
}