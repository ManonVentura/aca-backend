

const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  content: String,
  users : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  token:String,
  
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;