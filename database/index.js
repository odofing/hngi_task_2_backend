const mongoose = require('mongoose');

const url = process.env.DB_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected to ATLAS");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
 
