const jwt = require("jsonwebtoken");

const auth = (req,res,next) =>{

	try{
		const token = req.cookie.jwt;
		const verifyUser = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
		next();
	}catch(error){
		res.status(401).send(error);
	}
	
} 

module.exports = auth;