const db = require('../models');
const jwt = require("jsonwebtoken");
const User = db.user;

const login = (req,res) => {
	res.render('login', { layout: false });
}

const loginUser = async (req,res) => {
	const email = req.body.email;
	const password = req.body.password;
	
	const userEmail = await User.findOne({ where: { email: email } });

	//Generating Access Token
	const accessToken = generateAccessToken(userEmail.email)
  	
  	//Storing token in Cookie
  	res.cookie("jwt", accessToken, {
  		expires:new Date(Date.now()+100000),
  		httpOnly:true
  	});


  	//Checking User details
	if(userEmail.password === password){
		res.redirect('/listBlog');
	}else{
		res.send("invalid login details");
	}
	  
}

const logoutUser = (req,res) => {
	res.clearCookie("jwt");
	res.render('login', { layout: false });
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

module.exports = {
	login,loginUser,logoutUser
}