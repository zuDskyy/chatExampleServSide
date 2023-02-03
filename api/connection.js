const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, (err) => {
    if(err) console.log(err) 
    else console.log("mongdb is connected");
   })