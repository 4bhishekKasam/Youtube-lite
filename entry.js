var express = require('express');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
const route = require('./routes/route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//connect to mongodb
mongoose.connect("mongodb://abhi_madmax:abhi190394@ds251287.mlab.com:51287/videoplayer", { useMongoClient: true });
//mongoose.connect('mongodb://localhost:27017/videodb', { useMongoClient: true });

//on connection
mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected at port 27017');
});

//on connection error
mongoose.connection.on('error',(err)=>{
    console.log(err);
});

const PORT = 3000;
app.use(cors());
//app.use(bodyparser.json());

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('page with just /');
});

app.listen(PORT, ()=>{
    console.log('Server has been started at port: '+ PORT);
});