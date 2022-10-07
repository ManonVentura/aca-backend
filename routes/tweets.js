var express = require('express');
var router = express.Router();
const { checkBody } = require('../modules/checkBody');
const Tweet = require('../models/tweet')
require('../models/connection');
const uid2=require('uid2');

const token =uid2(32)
var router = express.Router();

router.post('/', (req, res) => {
    if (!checkBody(req.body, ['content'])) {
      res.json({ result: false, error: 'Missing or empty fields' });
      return;
    }
    const newTweet = new Tweet({
      token: token,
      content: req.body.content,
      date: new Date(),
      nbrLikes: 0,
      user: req.body.id,
    });
    newTweet.save().then(data => {
      res.json({ result: true, data:data});
    });
});

router.delete('/:id', (req, res) => {
  Tweet.deleteOne({ id: req.params.id }).then(deletedDoc => {
    if (deletedDoc.deletedCount > 0) {
      Tweet.find().then(data => {
        res.json({ result: true, tweet: data });
      });
    } else {
      res.json({ result: false });
    }
  });
});``

//route get -> afficher tweets dans LastTweets.js

router.get('/lasttweets', (req, res) => {
  Tweet.find()
  .then(data => {
    res.json({result:true, lasttweets: data})
  });
});

//route update -> ajouter un like <3

router.put('/addlike', (req,res) => {
  Tweet.updateOne({id: req.body.id}, {$inc: {nbrLikes: 1} })
  .then(() => {
    Tweet.find()
    .then(data =>  {
      console.log(data),
      res.json({result:true, tweets: data})
    })
  })
})


module.exports = router;
