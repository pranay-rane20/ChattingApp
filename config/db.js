const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect("mongodb://127.0.0.1.27017/chatapp")
    console.log("connected to DB")
}

connect();
module.exports = mongoose.connection;
