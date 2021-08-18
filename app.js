const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
app.use(express.json());


app.use(cors())
const postRoute = require('./Routes/contactRoute');
   
const connectDB = require('./database')

connectDB()
app.use('/api/', postRoute);


const PORT = process.env.PORT || 6000;


app.listen(PORT, console.log(`server connected on ${PORT}`));