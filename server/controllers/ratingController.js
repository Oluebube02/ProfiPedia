const Rating = require('../models/Ratings')

const Prof = require('../models/Professor')

const getRatings = async (req, res) => {
  const id = req.params.id

  const prof = await Prof.findById(id)

  if (!prof){
    return res.status(400).json("This professor does not exist")
  }
  const ratings = await Rating.find({prof_id:id})

  res.status(200).json(ratings)
}

const addRating = async (req, res) => {
  const {course, rating, difficulty, textbook_use, attendance, review, prof_id} = req.body
  

  if(!course||!rating||!difficulty||!textbook_use||!attendance||!review){
    return res.status(400).json("All required field must be filled out")
  }else{
    await Rating.create({...req.body, user_id:req.id})
    const prof = await Prof.findById(prof_id)
    const {total_rating, rating_count, total_diff} = prof.rating_info
    const [new_total, new_count, avg_rate, new_diff, avg_diff] = [total_rating + rating,
       rating_count + 1, (total_rating + rating)/(rating_count + 1),
       total_diff + difficulty, (total_diff + difficulty)/(rating_count + 1)]
    const new_info = {
      total_rating : new_total,
      rating_count : new_count,
      average_rating : avg_rate,
      total_diff : new_diff,
      average_diff : avg_diff
    }

    await Prof.findOneAndUpdate({_id:prof_id}, {rating_info:new_info})
    res.status(200).json("success")

  }  
} 

module.exports = {getRatings, addRating}