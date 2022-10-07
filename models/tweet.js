
const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  token: String,
  content: String,
<<<<<<< HEAD
  date: Date,
  nbrLikes: Number,
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
=======
  users : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  token:String,
>>>>>>> 0ed703dceb6c397da7220eaac762324629c672ab
  
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;