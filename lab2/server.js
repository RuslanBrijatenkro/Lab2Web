import * as db from './src/Components/WorkWithDb.js'
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

db.SetUpConnection();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, () => 
{
  console.log(`Listening on port ${port}`);
});

app.get('/signIn',db.GetUsers);
app.get('/getConcerts',db.GetConcerts);
app.post('/registration',db.AddUser);
app.post('/booking',db.AddToBooking);
app.get('/booking',db.GetBooking);
app.delete('/getConcerts/:id',db.DeleteConcert);
//app.get('/posts',db.GetUsers);





