const db = require('../models');
const Blog = db.blog;


const indexPage = (req,res) => {

	Blog.findAll().then(blogs => {
        res.render('front', { blogsData1: blogs , layout: './layouts/frontLayout' });
  });
}

const blogDetails = async (req,res) => {

	await Blog.findOne({ where: { slug: req.params.slug } }).then(blogs1 => {
        res.render('blogdetails', { blogsData2: blogs1 , layout: './layouts/frontLayout' });
  });
}


module.exports = {
    indexPage,blogDetails
}