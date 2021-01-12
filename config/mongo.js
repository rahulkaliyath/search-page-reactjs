const mongoose = require('mongoose');
const config = require('config');
const MONGO_URI = config.get('MONGO_URI');


const connectDB = async () =>  {
    try {
       await mongoose.connect(MONGO_URI,
            { useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true ,
                useFindAndModify:false});
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Connection to MongoDB Failed", error.message);
    }
}

module.exports = connectDB;
