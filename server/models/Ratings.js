const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RatingSchema = new Schema(
  {
    prof_id :{
      type: String,
      required: true
    },

    user_id :{
      type: String,
      required: true
    }, 
    course: {
      type : String,
      required : true
    },

    rating : {
      type : Number,
      required : true
    },

    difficulty : {
      type : Number,
      required : true
    },

    textbook_use : {
      type : String,
      required : true
    },

    attendance : {
      type : String,
      required : true
    },

    review : {
      type : String,
      required : true
    }
  }
)

RatingSchema.statics.addrating = async function (res, data) {
  
  
}

module.exports = mongoose.model('Rating', RatingSchema)