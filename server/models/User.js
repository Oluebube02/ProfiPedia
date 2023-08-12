const mongoose = require('mongoose')

const validator = require('validator')

const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({

  email :{
    type : String,
    required : true,
    unique : true
  },

  password : {
    type : String,
    required : true,

  },

  school : {
    type : String,
    required : true
  },

  professors : {
    type : [String]
  }


})


UserSchema.statics.signup = async function (res, email, password, school){ 
  if (!email || !password || !school){
    res.status(400).json("All fields must be filled")
    return null
  }
  if (!validator.isEmail(email)){
    res.status(400).json('Email is not valid')
    return null
  }

  if (!validator.isStrongPassword(password)){
    res.status(400).json('Password is not strong enough')
    return null
  }
  const exists = await this.findOne({email})

  if (exists) {
    res.status(400).json('Email already in use')
    return null
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = this.create({email, password:hash, school, professors: []})

  return user  
}

UserSchema.statics.login = async function (res, email, password) {
  if (!email || !password) {
    res.status(401).json("All fields must be filled")
    return null
  }

  const user = await this.findOne({email})
  if (!user) {
    res.status(401).json("User does not exist")
    return null
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    res.status(401).json("Incorrect password")
    return null
  }

  return user
}
module.exports = mongoose.model('User', UserSchema)