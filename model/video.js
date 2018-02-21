const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    title :  {type:String, required:true},
    url :   {type:String, required:true},
    description :  {type:String, required:true}  
});

//const Video = module.exports = mongoose.model('video', videoSchema,'videos');

 module.exports = mongoose.model('video', videoSchema,'videos');
