const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log("Not connected");
    console.log('connected to DB')
})


app.listen(process.env.PORT || 3000, () => console.log('Server running......'));