const Prof = require('../models/Professor')


const getProf = async (req, res) => {
  const {first, last} = req.body

  if (!first && !last){
    res.status(400).json("Please enter firt and last name of the professor")
  }else if (first && !last){
    const professors = await Prof.find({$or : [{firstname : first}, {lastname:first}]})
    res.status(200).json(professors)
  }else {
    const professors = await Prof.find({$and : [{firstname : first}, {lastname:last}]})
    res.status(200).json(professors)
  }

}

const addProf = async (req, res)  => {
  const {firstName, lastName, school} = req.body
  await Prof.addprofessor(res, firstName, lastName, school)
}

const rateProf = (req, res) => {}


module.exports ={
  addProf, getProf, rateProf
}