const express = require('express');
const app = express();
require('dotenv').config({path:'./config/.env'})
const mongoose = require('mongoose');
app.use(express.json())
const PORT = process.env.PORT || 5000;


//routers
app.use('/Utilisateur', require('./Routers/UserRouter'))

//connect to the db
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))
app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))