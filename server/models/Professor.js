const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProfSchema = new Schema(
  {
    firstname : {
      type : String,
      required : true
    },

    lastname : {
      type : String,
      required : true
    },

    school : {
      type : String,
      required : true
    },

    rating_info : {
      total_rating : Number,
      rating_count : Number,
      average_rating : Number,
      total_diff : Number,
      average_diff : Number
    }
  }
)

ProfSchema.statics.addprofessor = async function (res, firstname, lastname, school) {
  if (!firstname || !lastname || !school){
    return res.status(400).json("All fields must be filled")
  }
  const exists = await this.findOne({$and : [{firstname : firstname}, {lastname:lastname}]})
  if (exists) {
    return res.status(400).json("This professor already exists")
  }
  const rating_info = {
    total_rating : 0,
    rating_count : 0,
    average_rating : 0,
    total_diff : 0,
    average_diff : 0
  }
  const prof = await this.create({firstname, lastname, school, rating_info})
  const id = prof._id



  return res.status(200).json({prof, id})
}

module.exports = mongoose.model('Professor', ProfSchema)