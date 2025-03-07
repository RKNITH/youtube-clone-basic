const mongoose = require("mongoose");

// youtubeBackend

mongoose
  .connect('mongodb://localhost:27017/youtubeBackend')
  .then(() => console.log('DB connection successful!')).catch(err=>{
    console.log(err)
  });