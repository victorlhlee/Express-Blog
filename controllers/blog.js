var express = require('express');
var router = express.Router();
var Blog = require('../models/blogmodel');

router.list = function (req, res){
  //find all Todo data in collection
  Blog.find(function(err, blogsFromDB){
    // console.log(todosFromDB);
    res.render('Blog', {
      blogs : blogsFromDB
    });    
  });
};


// get edit fullblog page
router.get('/:id', function (req, res){ //replacing app.get('/blogs/:id', to router.get('/:id',))
  var blog_id = req.params.id;

  Blog.findById(blog_id, function (err, blog){
    res.render('fullblog', {
      blogs : blog
    });
  });
  
});

//post data
router.post('/', function (req, res){ //replacing app.post('/blog', to router.post('/',))
  //prep data 
  var newBlog = new Blog({
    author: req.body.author,
    title: req.body.title,
    body: req.body.body,
//     is_done: false,
//     created_at: new Date()
  });
  //save data to db (mongodb via mongoose)
  newBlog.save(function (err){
    if(err) throw err;
    res.redirect('/');
  });
});

router.put('/:id', function (req, res){ //replacing app.put('/blog/:id' to router.put('/:id'))
  //prep data
  var blog_id = req.params.id;
  Blog.findById(blog_id, function(err, blogsFromDB){
    blogsFromDB.author = req.body.author;
    blogsFromDB.title = req.body.title;
    blogsFromDB.body = req.body.body;

    blogsFromDB.save(function (err){
      if(err) throw err;
      res.redirect('/');
    });
  });
});


//delete item in todo list
router.delete('/:id', function (req, res){ //replacing app.delete('/blog/:id to router.delete('/:id')
  var blog_id = req.params.id; //req.params for dynamic url 
  Blog.findById(blog_id, function (err, blog){ //find todo item by id
    Blog.remove(blog, function() { //remove todo item
      res.redirect('/'); //redirect by to list page
    });
  });
});

//put data
router.put('/:id/complete', function (req, res){
  // var todo_id = req.params.id;
  console.log("update");
  Blog.update({_id: req.params.id},
//     {is_done : true}, 
     function (err, blog){
      if (err) throw err;
      res.send("okay");
      // res.redirect('/');
    });
});

module.exports = router;
