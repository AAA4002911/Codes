const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const PORT = process.env.PORT || 3000;
const server =  process.env.DATABASE_URI;

mongoose.connect(server,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log("succesfully connected to database"))
.catch(() => console.log("failed to connect to database"));


app.listen(PORT, () => console.log('Server is up at port', PORT));