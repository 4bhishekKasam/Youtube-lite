var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
mongoose.Promise = Promise;

const Video = require('../model/video');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


router.get('/route',(req,res,next)=>{
    res.send('hello you there');
});

router.get('/videos',function(req,res){
    console.log('get request from all videos');
      Video.find({})
        .exec(function(err,videos){
          if(err){
          console.log("Error retrieving videos");
          }
          else{
            res.json(videos);
            }
    });
});

  router.get('/videos/:id',function(req,res){
      console.log('get request for a single video');
        Video.findById(req.params.id)
          .exec(function(err, video){
            if(err){
            console.log('Error retrieving videos');
            }
            else{
              res.json(video);
              }
      });
   });

 router.post('/video',(req,res,next)=>{
     console.log('post a video');
      var newVideo = new Video();
       newVideo.title = req.body.title;
        newVideo.url = req.body.url;
          newVideo.description = req.body.description; 
       newVideo.save(function(err,insertedVideo){
           if(err){
               console.log('error saving video');
              res.json(err);
            }else{
               res.json(insertedVideo);
               console.log('added one video');
           }
       });
   });

//router.post('/video',(req,res,next)=>{
//    let newVideo = new Video({
//        title : req.body.title,
//        url : req.body.url,
//        description :req.body.description
//    });
//    newVideo.save((err, insertedVideo)=>{
//        if(err){
//            res.json(err);
//        }
//        else{
//            res.json({msg:'Video has been added successfully'});
//            //res.json(insertedVideo);
//        }
//    });
// });

router.put('/video/:id', function(req,res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set:{title:req.body.title,url:req.body.url,description:req.body.description}
    },
    {  new:true },

    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    });     
});

router.delete('/video/:id', function(req,res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err,deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
          //  res.json(deletedVideo);
            res.json({msg:"video is been deleted successsfully"});
        }
    });
});


module.exports = router;


























