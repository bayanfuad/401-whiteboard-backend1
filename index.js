'use strict';

require('dotenv').config();
const { start } = require('./server');
const { dataBase } = require('./models/index');
dataBase.sync()
.then(()=>{start(process.env.PORT)})
.catch((err)=>{console.log(err)});