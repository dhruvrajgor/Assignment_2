const db = require('../models');
const Category = db.category;

//Listing all Category
const listCategory = async (req,res) => {
	
   	await Category.findAll().then(category => {
           res.render('category/listCategory', { categoryData: category });
      });
}

//render add category page
const addCategory = (req,res) => {

	  res.render('category/addCategory');
}

// add new category
const addCategories = async (req,res) => {

   	await Category.create({
           name: req.body.catname,
      })
       .then((result) => {
             res.redirect('/listCategory');
      });

}

// render category edit page
const editCategory = async (req,res) => {
	
   	await Category.findOne({ where: { id: req.params.id } }).then(category => {
         	res.render("category/editCategory", { categoryData: category });
     	});
}

// update category
const updateCategory = async (req,res) => {

      await Category.update(
         {
             name: req.body.catname,
          },
          { where: { id: req.params.id } }
      )
      .then((result) => {
            res.redirect('/listCategory');
      });
   
}

// delete category
var deleteCategory = async (req,res) => {

    await Category.destroy({
            where: {
              id: req.params.id
            }
          }
      )
      .then((result) => {
            res.redirect('/listCategory');
      });
   
}

module.exports = {
	listCategory,addCategory,addCategories,editCategory,updateCategory,deleteCategory
}