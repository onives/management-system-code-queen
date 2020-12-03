//import express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let systemRoutes = require('./routes/systemRoutes');

//start app
let app = express();

//use API routes in the app
app.use('/alumni', systemRoutes); ///how should this be modified to cater for all routes
app.use('/admin', systemRoutes);
app.use('/students', systemRoutes);

//assign port 
var port = process.env.PORT || 8080;

//Welcome message
app.get('/', (req, res)=>{
    res.send("welcome to express")
});

//launch app to the specified port

app.listen(port, function(){
    console.log("app is running on port "  +port)
});

//configure bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//connect to mongoose
const dbPath = 'mongodb://localhost:27017/code-queen-db';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
const mongo = mongoose.connect(dbPath, options);

//handle errors
mongo.then(()=>{
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
