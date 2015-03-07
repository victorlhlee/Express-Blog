
//getting started with express, bodyParser 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var methodOverride = require('method-override');
var blog = require('./controllers/blog');


//db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogtest');
//each schema maps to a MongoDB collection and defines the shape of the documents within that collection
// var Schema = mongoose.Schema;

//blueprint for data, defining your schema
// var blogSchema = new Schema ({
//   author: String,
//   title: {type:String, required: true},
//   body: String,
//   date: Date
// }); 

//architect; point of access
//model is a class that constructs documents
// var Blog = mongoose.model("Blog", blogSchema);

//middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'jade');
app.use('/blog', blog);
// app.use(methodOverride(function(req, res){
//   if(req.body && typeof req.body === 'object' && '_method' in req.body){
//     var method = req.body._method;
//     delete req.body._method;
//     return method;
//   }
// }));

//routes

//linking routes from blog.js
app.get('/', blog.list);
//get list.jade page
// app.get('/', function (req, res){
//   //find all Todo data in collection
//   Blog.find(function(err, blogsFromDB){
//     // console.log(todosFromDB);
//     res.render('Blog', {
//       blogs : blogsFromDB
//     });    
//   });
// });

// // get newtodo list.jade page
// app.get('/fullblog', function (req, res){
//   res.render('fullblog');
// });

// // get edit fullblog page
// app.get('/blogs/:id', function (req, res){
//   var blog_id = req.params.id;

//   Blog.findById(blog_id, function (err, blog){
//     res.render('fullblog', {
//       blogs : blog
//     });
//   });
//   
// });

// //post data
// app.post('/blog', function (req, res){
//   //prep data 
//   var newBlog = new Blog({
//     author: req.body.author,
//     title: req.body.title,
//     body: req.body.body,
// //     is_done: false,
// //     created_at: new Date()
//   });
//   //save data to db (mongodb via mongoose)
//   newBlog.save(function (err){
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// app.put('/blog/:id', function (req, res){
//   //prep data
//   var blog_id = req.params.id;
//   Blog.findById(blog_id, function(err, blogsFromDB){
//     blogsFromDB.author = req.body.author;
//     blogsFromDB.title = req.body.title;
//     blogsFromDB.body = req.body.body;

//     blogsFromDB.save(function (err){
//       if(err) throw err;
//       res.redirect('/');
//     });
//   });
// });


// //delete item in todo list
// app.delete('/blog/:id', function (req, res){
//   var blog_id = req.params.id; //req.params for dynamic url 
//   Blog.findById(blog_id, function (err, blog){ //find todo item by id
//     Blog.remove(blog, function() { //remove todo item
//       res.redirect('/'); //redirect by to list page
//     });
//   });
// });

// //put data
// app.put('/blog/:id/complete', function (req, res){
//   // var todo_id = req.params.id;
//   console.log("update");
//   Blog.update({_id: req.params.id},
// //     {is_done : true}, 
//      function (err, blog){
//       if (err) throw err;
//       res.send("okay");
//       // res.redirect('/');
//     });
// });

// app.put('/blog/:id/incomplete', function (req, res){
//   // var _id = req.params.id;
//   console.log("update");
//   ToDo.update({_id: req.params.id},
// //     {is_done : false}, 
//      function (err, todo){
//       if (err) throw err;
//       res.send("okay");
//       // res.redirect('/'); //ajax can't do redirect
//     });
// });

//localhost3000
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

//https://vimeo.com/20518192