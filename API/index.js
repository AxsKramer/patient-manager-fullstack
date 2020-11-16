const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;


const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whitelist.some(domain => domain === origin);
    exist ? callback(null, true) : callback(new Error('Not Allowed By CORS'))
  }
}

//Enable Cors with configurations
// app.use(cors(corsOptions));

//Enable Cors
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/patients', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', router);

app.listen(port, () => console.log(`Server running in port ${port}`));