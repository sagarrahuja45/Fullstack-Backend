const Post = require('../../models/post')
const jwt= require('jsonwebtoken');
const secretKey = 'mykey';

async function dashboard(req,res){
    try{
        const token = req.headers.authorization.split(' ')[1];
        console.log(token)
        const decodedToken = jwt.verify(token, secretKey);
        console.log(">>>>>>" + decodedToken)

        const getData = await Post.find({
            userId : decodedToken
        })
        console.log(getData)
        res.status(200).json({getData});
        console.log("dashboard loaded success")
    }
    catch (err){
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
 


}

module.exports = {
    dashboard
}