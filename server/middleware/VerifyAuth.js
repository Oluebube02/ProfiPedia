const jwt = require('jsonwebtoken')

const verifyAuth = (req, res, next) => {

  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1].trim()

  jwt.verify(
    token,
    "6343ff5a3cf9d1369eaa04fcf14590788217d851f3487a39c4e16e3d9ed159a7585fc2eb29caa913529e4029cf9c67797af7f6e45e802621ee19ddf5d4b76df8",
    (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Forbidden' })
        req.id = decoded.id
        req.email = decoded.email
        next()
    }
  )
}

module.exports = verifyAuth