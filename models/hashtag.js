const mongoose = require('mongoose');


const hashtagSchema = mongoose.Schema({
 
       hashtag: String,
      tweet: {type: mongoose.Schema.ObjectId, ref: 'tweet'},
      
});

const hashtag = mongoose.model('hashtag', hashtagSchema);

module.exports = hashtag;