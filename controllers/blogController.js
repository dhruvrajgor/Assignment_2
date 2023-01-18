const db = require('../models');
const fs = require("fs");
const Blog = db.blog;
const Category = db.category;

const listBlog = (req,res) => {

	Blog.findAll().then(blogs => {
        res.render('blogs/listBlog', { blogsData: blogs });
    });
}

const addBlog = (req,res) => {

	Category.findAll().then(category => {
        res.render('blogs/addBlog', { categorydata: category });
    });
	//res.render('blogs/addBlog');
}

const addBlogs = async (req,res) => {

	await Blog.create({
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        catId: req.body.catId,
        publish_date: req.body.publish_date,
        img_url: req.file.filename
    })
    .then((result) => {
          //res.render('blogs/addBlog', { });
          res.redirect('/listBlog');
    });

}

const editBlog = async (req,res) => {

	let category = await Category.findAll();
	
	await Blog.findOne({ where: { id: req.params.id } }).then(blogs => {
      	res.render("blogs/editBlog", { blogData: blogs,categorydata : category });
  	});
}

const updateBlog = async (req,res) => {

	//console.log(req.body.old_image);

	let new_image="";

	  if(req.file){
	  	new_image= req.file.filename;
	  	try{
	  		fs.unlinkSync('./public/uploads/' + req.body.old_image);
	  	}catch(err){
	  		console.log(err);
	  	}
	  }else{
	  	new_image= req.body.old_image
	  }

      await Blog.update(
         {
             title: req.body.title,
	         slug: req.body.slug,
	         description: req.body.description,
	         catId: req.body.catId,
	         publish_date: req.body.publish_date,
	         img_url: new_image
          },
          { where: { id: req.params.id } }
      )
      .then((result) => {
            res.redirect('/listBlog');
      });
   
}

var deleteBlog = async (req,res) => {

	 const blog = await Blog.findOne({ where: { id: req.params.id } });
	// console.log(blog);

    await Blog.destroy({
            where: {
              id: req.params.id
            }
          }
      )
      .then((result) => {

      		fs.unlinkSync('./public/uploads/' + blog.img_url);

            res.redirect('/listBlog');
      });
   
}

module.exports = {
	listBlog,addBlog,addBlogs,editBlog,updateBlog,deleteBlog
}