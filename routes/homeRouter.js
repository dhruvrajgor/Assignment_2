const express = require("express")
const router = express.Router()
const homeController = require("../controllers/homeController")
const blogController = require("../controllers/blogController")
const categoryController = require("../controllers/categoryController")
const frontController = require("../controllers/frontController")
var auth = require('../middleware/auth');
const upload = require("../middleware/upload");


router.get("/front", frontController.indexPage);
//router.get("/:slug", frontController.blogDetails);

router.get("/login",homeController.login);
router.post("/login", homeController.loginUser);
router.get("/logout", homeController.logoutUser);
//router.get("/home",auth, homeController.indexView);

router.get("/listBlog", blogController.listBlog);
router.get("/addBlog", blogController.addBlog);
router.post("/addBlog" , upload.single("file"), blogController.addBlogs);
router.get("/editBlog/:id", blogController.editBlog);
router.post("/updateBlog/:id", upload.single("file"), blogController.updateBlog);
router.post("/deleteBlog/:id", blogController.deleteBlog);

router.get("/listCategory", categoryController.listCategory);
router.get("/addCategory", categoryController.addCategory);
router.post("/addCategory" , categoryController.addCategories);
router.get("/editCategory/:id", categoryController.editCategory);
router.post("/updateCategory/:id", categoryController.updateCategory);
router.post("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router
