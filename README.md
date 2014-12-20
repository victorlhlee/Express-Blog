Express-Blog
============

MEH stack - Mongo Express and HTML5 

Use the MEH stack plus *almost* any other library or templating engines you want to fulfill the requirements.  
recommended: sass, jade, mongoose, bower, jQuery, foundation.  
helpful: livereload, gulp for watching compiling sass

---

Create a multi-user Blog.  
Any user should be able to access these routes:  

- `GET /` to view a list of blog post entries
- `GET /blog/:id` to see a single blog post
	- each blog post should include a link to delete this blog post
	- each blog post should include a link to edit this blog post
- `GET /new_blog` to see a "new blog post" form
	- the form fields are:
		- `author` : Text
		- `title` : Text
		- `body` : TextArea
- `POST /blog` to create a new blog post i
- `GET /blog/:id/edit` to see a form to *edit* a blog post identified by the `:id` param
	- the form fields are:
		- `author` : Text
		- `title` : Text
		- `body` : TextArea
- `PUT /blog/:id` updates a single blog post identified by the `:id` param
- `DELETE /blog/:id` to delete a single blog post identified by the `:id` param

---

Your app should be stored in subdirectory `/app`.  
The layout of the app must match the layouts included in `/layouts`.  
Match the layout as close as you can, using free and open fonts and graphics.