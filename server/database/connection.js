const mongoose = require("mongoose");
require('dotenv').config(); // Ensure .env file is loaded

const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URI, {
        // useUnifiedTopology: true,
        // useNewUrlParser: true
    }).then(() => {
        console.log('Database connected');
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = connectDB;
