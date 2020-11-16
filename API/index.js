const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const app = express();
const port = process.env.PORT || 4000;

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