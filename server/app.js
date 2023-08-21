const express = require('express')

const cookieParser = require('cookie-parser')

const mongoose = require('mongoose')

const app = express()

app.use(cookieParser())

const cors = require('cors')

require('dotenv').config()

app.use(cors({credentials: true, origin: true}))

app.use(express.json())

mongoose.connect(process.env.DBURI)
.then(() => app.listen(process.env.PORT, () => console.log("listening on port 3000")))
.catch((error) => console.log(error))

const userRoute = require('./routes/userRoute')

const profRoute = require('./routes/profRoute')

const rateRoute = require('./routes/ratingRoute')

app.use('/user', userRoute)

app.use('/prof', profRoute )

app.use('/ratings', rateRoute)

