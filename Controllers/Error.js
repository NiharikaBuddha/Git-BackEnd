const path = require('path');
const rootDir = require('../util/path');


exports.ErrorPage=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views','404.html'));
}