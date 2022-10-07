const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
     username: String,
     name:String,
     password: String,
     token: String,
     image: String,

});

const User = mongoose.model('users', userSchema);

module.exports = User;