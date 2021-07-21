const express = require('express');
const mongoose = require('mongoose');
const initRoute = require('./server/routes/route');

const app = express();
const MONGO_URI = 'mongodb+srv://admin:adarsh@adarsh.oonlm.mongodb.net/products?retryWrites=true&w=majority'


// mongodb connection 
mongoose.connect(MONGO_URI , {useNewUrlParser:true , useCreateIndex : true , useUnifiedTopology : true , useFindAndModify : true});
const con = mongoose.connection ;

con.once('open' , ()=> {
    console.log('Database connected succesfully .. ');
}).catch (err => {
    console.log(err);
})

// routes
initRoute(app);

// json parser
app.use(express.json());

// server 
app.listen(3000 , ()=> {
    console.log('Server started at PORT - 3000');
})

