const mongoose = require('mongoose');

const connectionString = "mongodb+srv://Nadia:Livia.2020@cluster0.dlxqx3c.mongodb.net/hacatweet"

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
