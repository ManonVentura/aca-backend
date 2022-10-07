
const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  token: String,
  content: String,
  date: Date,
  nbrLikes: Number,
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;