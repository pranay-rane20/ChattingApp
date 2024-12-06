const mongoose = require('mongoose');

// Connect to MongoDB

function connect() {
    mongoose.connect(process.env.DB_URI)
       .then(() => console.log('MongoDB connected...'))
       .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = connect;