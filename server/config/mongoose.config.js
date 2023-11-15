const mongoose = require('mongoose');

mongoose.connect('mongodb://ars0n-mongodb/wapt_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Database connection established..."))
    .catch(err=>console.log("ERROR: ", err));