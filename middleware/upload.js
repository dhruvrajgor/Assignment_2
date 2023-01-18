const path = require('path');
const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname,'../public/uploads/'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix + file.fieldname + '_' + file.originalname)
  },
  // filename: (req, file, cb) => {
  //   console.log("helooo");
  //   cb(null, Date.now() + file.originalname.replace(/\s+/g, "-"));
  //   console.log("hiii");
  // },
});
var uploadFile = multer({ storage: storage, fileFilter: imageFilter,limits: { fileSize: 1000000 }, });
module.exports = uploadFile;